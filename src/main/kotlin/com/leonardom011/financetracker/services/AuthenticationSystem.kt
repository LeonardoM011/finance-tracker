package com.leonardom011.financetracker.services

class AuthenticationSystem() {
    private val auth : MutableMap<Int, MutableList<String>> = mutableMapOf<Int, MutableList<String>>()

    private fun randomID(): String = List(32) {
        (('a'..'z') + ('A'..'Z') + ('0'..'9')).random()
    }.joinToString("")

    fun generateKey(userId : Int) : String {
        var key = randomID()

        // Creating list with existing elements from auth
        var keyList : MutableList<String> = auth[userId]!!
        // push new key to list
        keyList.add(key)
        auth[userId] = keyList
        return key
    }

    fun userExists(authKey : String) : Boolean {
        for ((key, value) in auth) {
            if (value.contains(authKey)) {
                return true
            }
        }
        return false
    }

    fun getUserId(authKey : String) : Int? {
        for ((key, value) in auth) {
            if (value.contains(authKey)) {
                return key
            }
        }
        return null
    }

    fun deleteKeysForUser(userId: Int) : Boolean {
        auth.remove(userId)
        if (auth == null) {
            return false
        }
        return true
    }


}