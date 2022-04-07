package com.example.myapplication

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.animation.LinearInterpolator
import androidx.recyclerview.widget.DefaultItemAnimator
import androidx.recyclerview.widget.DiffUtil
import com.example.myapplication.databinding.FragmentRecommendationBinding
import com.yuyakaido.android.cardstackview.*
import java.time.LocalDateTime

class RecommendationFragment : Fragment(), CardStackListener {
    lateinit var binding: FragmentRecommendationBinding
    private val manager by lazy {CardStackLayoutManager(this.context, this)}
    private val adapter by lazy { CardStackAdapter(createGroups()) }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentRecommendationBinding.inflate(inflater, container, false)

        setUpCardStackView()

        binding.filterImageRecommendationFragment.setOnClickListener {
            val intent = Intent(this.context, GroupFilterActivity::class.java)
            startActivity(intent)
        }

        return binding.root
    }

    override fun onCardDragging(direction: Direction, ratio: Float) {
        Log.d("CardStackView", "onCardDragging: d = ${direction.name}, r = $ratio")
    }

    override fun onCardSwiped(direction: Direction) {
        Log.d("CardStackView", "onCardSwiped: p = ${manager.topPosition}, d = $direction")
        if (manager.topPosition == adapter.itemCount - 5) {
            paginate()
        }
    }

    override fun onCardRewound() {
        Log.d("CardStackView", "onCardRewound: ${manager.topPosition}")
    }

    override fun onCardCanceled() {
        Log.d("CardStackView", "onCardCanceled: ${manager.topPosition}")
    }

    override fun onCardAppeared(view: View?, position: Int) {

    }

    override fun onCardDisappeared(view: View?, position: Int) {

    }

    private fun setUpCardStackView(){
        manager.setStackFrom(StackFrom.None)
        manager.setVisibleCount(3)
        manager.setTranslationInterval(8.0f)
        manager.setScaleInterval(0.95f)
        manager.setSwipeThreshold(0.3f)
        manager.setMaxDegree(20.0f)
        manager.setDirections(Direction.HORIZONTAL)
        manager.setCanScrollHorizontal(true)
        manager.setCanScrollVertical(true)
        manager.setSwipeableMethod(SwipeableMethod.AutomaticAndManual)
        manager.setOverlayInterpolator(LinearInterpolator())
        binding.cardStackView.layoutManager = manager
        binding.cardStackView.adapter = adapter
        binding.cardStackView.itemAnimator.apply {
            if (this is DefaultItemAnimator) {
                supportsChangeAnimations = false
            }
        }
    }

    private fun paginate() {
        val old = adapter.getGroups()
        val new = old.plus(createGroup())
        val callback = GroupDiffCallback(old, new)
        val result = DiffUtil.calculateDiff(callback)
        adapter.setGroups(new)
        result.dispatchUpdatesTo(adapter)
    }

    private fun reload() {
        val old = adapter.getGroups()
        val new = createGroups()
        val callback = GroupDiffCallback(old, new)
        val result = DiffUtil.calculateDiff(callback)
        adapter.setGroups(new)
        result.dispatchUpdatesTo(adapter)
    }

    private fun addFirst(size: Int) {
        val old = adapter.getGroups()
        val new = mutableListOf<Group>().apply {
            addAll(old)
            for (i in 0 until size) {
                add(manager.topPosition, createGroup())
            }
        }
        val callback = GroupDiffCallback(old, new)
        val result = DiffUtil.calculateDiff(callback)
        adapter.setGroups(new)
        result.dispatchUpdatesTo(adapter)
    }

    private fun addLast(size: Int) {
        val old = adapter.getGroups()
        val new = mutableListOf<Group>().apply {
            addAll(old)
            addAll(List(size) { createGroup() })
        }
        val callback = GroupDiffCallback(old, new)
        val result = DiffUtil.calculateDiff(callback)
        adapter.setGroups(new)
        result.dispatchUpdatesTo(adapter)
    }

    private fun removeFirst(size: Int) {
        if (adapter.getGroups().isEmpty()) {
            return
        }

        val old = adapter.getGroups()
        val new = mutableListOf<Group>().apply {
            addAll(old)
            for (i in 0 until size) {
                removeAt(manager.topPosition)
            }
        }
        val callback = GroupDiffCallback(old, new)
        val result = DiffUtil.calculateDiff(callback)
        adapter.setGroups(new)
        result.dispatchUpdatesTo(adapter)
    }

    private fun removeLast(size: Int) {
        if (adapter.getGroups().isEmpty()) {
            return
        }

        val old = adapter.getGroups()
        val new = mutableListOf<Group>().apply {
            addAll(old)
            for (i in 0 until size) {
                removeAt(this.size - 1)
            }
        }
        val callback = GroupDiffCallback(old, new)
        val result = DiffUtil.calculateDiff(callback)
        adapter.setGroups(new)
        result.dispatchUpdatesTo(adapter)
    }

    private fun replace() {
        val old = adapter.getGroups()
        val new = mutableListOf<Group>().apply {
            addAll(old)
            removeAt(manager.topPosition)
            add(manager.topPosition, createGroup())
        }
        adapter.setGroups(new)
        adapter.notifyItemChanged(manager.topPosition)
    }

    private fun swap() {
        val old = adapter.getGroups()
        val new = mutableListOf<Group>().apply {
            addAll(old)
            val first = removeAt(manager.topPosition)
            val last = removeAt(this.size - 1)
            add(manager.topPosition, last)
            add(first)
        }
        val callback = GroupDiffCallback(old, new)
        val result = DiffUtil.calculateDiff(callback)
        adapter.setGroups(new)
        result.dispatchUpdatesTo(adapter)
    }

    private fun createGroup(): Group {
        return Group(id = 1L, name = "축구클럽", sports="축구", location = "탄천, 분당",
            participant = 5, maxNumber = 22, meetingDateTime = LocalDateTime.of(2022, 5, 22, 10, 0))
    }

    private fun createGroups(): List<Group> {
        val groups = mutableListOf<Group>()
        groups.add(Group(id = 1L, name = "축구클럽", sports="축구", location = "탄천, 분당",
            participant = 5, maxNumber = 22, meetingDateTime = LocalDateTime.of(2022, 5, 22, 10, 0)))
        groups.add(Group(id = 2L, name = "야구클럽", sports="야구", location = "스포츠센터, 용인",
            participant = 10, maxNumber = 15, meetingDateTime = LocalDateTime.of(2022, 4, 22, 16, 0)))
        groups.add(Group(id = 3L, name = "등산모임", sports="등산", location = "수지구청",
            participant = 3, maxNumber = 5, meetingDateTime = LocalDateTime.of(2022, 6, 20, 6, 30)))

        return groups
    }

}