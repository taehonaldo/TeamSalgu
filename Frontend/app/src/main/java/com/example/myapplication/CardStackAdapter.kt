package com.example.myapplication

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.databinding.ItemCardBinding

class CardStackAdapter(
    private var groups: List<Group> = emptyList()
) : RecyclerView.Adapter<CardStackAdapter.ViewHolder>(){

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        return ViewHolder(ItemCardBinding.inflate(inflater, parent, false))
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val binding = holder.binding
        val group = groups[position]

        binding.itemName.text = group.name
        binding.itemSports.text = group.sports
        binding.itemLocation.text = group.location
        binding.itemMaxNumber.text = "/" + group.maxNumber.toString()
        binding.itemMeetingDatetime.text = group.meetingDateTime.toString()

        binding.itemView.setOnClickListener { v ->
            Toast.makeText(v.context, group.name, Toast.LENGTH_SHORT).show()
        }
    }

    override fun getItemCount(): Int {
        return groups.size
    }

    fun setGroups(spots: List<Group>) {
        this.groups = spots
    }

    fun getGroups(): List<Group> {
        return groups
    }

    class ViewHolder(val binding: ItemCardBinding) : RecyclerView.ViewHolder(binding.root)
}
