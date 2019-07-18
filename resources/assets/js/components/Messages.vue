<template>
    <div class="container">
  <h2>Emsal</h2>
             
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Mesaj No</th>
        <th>Gönderen kişi</th>
        <th>Mesaj konusu</th>
        <th>Mesaj metni</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="message in messages" :key="message.id">
        <td>{{message.id}}</td>
        <td>{{message.user_id}}</td>
        <td>{{message.title}}</td>
        <td>{{message.description}}</td>
       
      </tr>
    </tbody>
  </table>
  <div class="form-group">
  <label for="comment">Mesajınız:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
</div>
</template>

<script>
    export default {
        data (){
            return{
                messages:
                [
                    /* {id:1, title: 'hi', description: 'dlfkjdlsjfsd'},
                    {id:2, title: 'hi', description: 'dlfkjdlsjfsd'},
                    {id:3, title: 'hi', description: 'dlfkjdlsjfsd'},
                    {id:4, title: 'hi', description: 'dlfkjdlsjfsd'} */
                ]

                
            }
        },
        
        created()
        {
            this.getMessages();
        },
        methods:
        {
            getMessages(){
               axios.get('api/messages').then(response => 
                //console.log(response.data)
                {this.messages = response.data.messages});
            
            
        }
        
        }
    }
</script>
