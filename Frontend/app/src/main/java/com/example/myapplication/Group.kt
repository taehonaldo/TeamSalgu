package com.example.myapplication

import java.time.LocalDateTime

data class Group(
    val id: Long,
    val name: String,
    val sports: String,
    val location: String,
    val participant: Int,
    val maxNumber: Int,
    val meetingDateTime: LocalDateTime
) {
}