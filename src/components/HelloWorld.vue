<template>
  <div>
  <article v-for="(location, idx) in locations" :key="idx">
    <img :src="location.images" width="100" height="150">
    <h1>{{ location.name }}</h1>
    <button @click="deleteLocation(location.id)">
    Delete
  </button> 
  </article>

  <form @submit.prevent="addLocation(names, images)">
    <input v-model="names" placeholder="Location Name">  <p></p>
    <input v-model="images" placeholder="Location Image URL">     <p></p>
    <button type="submit">Add New Location</button>
</form>

</div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'HelloWorld',
  data () {
    return {
      locations: [],
      names: '',      // <-- here
      images: ''      // <-- here
    }
  },
  firestore () {
    return {
      locations: db.collection('locations').orderBy('name')
    }
  },
  methods: { 
    addLocation (names, images) {
      const created = new Date()

      db.collection('locations').add({ name: names,
                                       image: images,
                                       createdAt: created
                                       })
      // Clear values
      
      this.names = ''
      this.images = ''
    },

    deleteLocation (id) {
      db.collection('locations').doc(id).delete()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
