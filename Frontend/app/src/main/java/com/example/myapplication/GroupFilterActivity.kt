package com.example.myapplication

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.myapplication.databinding.ActivityGroupFilterBinding

class GroupFilterActivity : AppCompatActivity() {

    private lateinit var binding: ActivityGroupFilterBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityGroupFilterBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }
}