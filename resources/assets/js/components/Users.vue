

<script>
export default {
    data: {
    users: null
  },
    mounted()
    {
        this.getUsers();
    },

    methods:
    {
        getUsers()
        {
            axios.get('api/users').then(response => {
                console.log(response.data);
                this.users = response.data;
            }
            )    
        },
    }
}
</script>

<style>

</style>
<template>
    <div class="container">
  <h2>Striped Rows</h2>
  <p>The .table-striped class adds zebra-stripes to a table:</p>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>fdfdf</td>
        <td>fdf</td>
        <td>fdfd</td>
      </tr>

     <tr v-for="item in users" :key="item.id">
        {{ item.name }}
    </tr>
       
        
      
    </tbody>
  </table>
</div>
</template>