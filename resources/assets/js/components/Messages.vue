<template>
    <div class="container">
  <h2>Emsal</h2>
    <button v-on:click="getMessages()" type="button"  class="btn btn-secondary">Yenile</button>

  <div class="scrollable_table" id="automaticscroll"> 
      
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Mesaj No</th>
        <th>Gönderen kişi</th>
        <th>Mesaj metni</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="message in messages" :key="message.id">
        <td>{{message.id}}</td>
        <td>{{message.user_id}}</td>
        <td>{{message.description}}</td>
       
      </tr>
      <tfoot>
    <tr>
      <td>.</td>
      
    </tr>
  </tfoot>
    </tbody>
  </table>
  </div> 
    <form @submit.prevent="insertAndScroll" id="messageForm">

<div class="form-group">
  <label for="comment">Mesajınız:</label>
  <textarea id="message" class="form-control" rows="5"  v-model="message" v-on:keyup="checktext"></textarea>
</div>
<button id="button" type="submit" disabled=true  class="btn btn-secondary">Gönder</button>
  </form>
  
</div>

</template>

<script>
    export default {
        data (){
           
         
            return{
                message:[],
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

           scrollDown()
            {
                document.getElementById("automaticscroll").scrollTop=document.getElementById("automaticscroll").scrollHeight  ;

            },

            checktext: function(){
              var charactor_count = document.getElementById("message").value;
              if(charactor_count.length>10)
              {
                //alert('the key is up');
                document.getElementById("button").disabled = false;
                document.getElementById('button').classList.remove('btn-secondary');
                document.getElementById('button').classList.add('btn-success');
              }

              else
              {
                document.getElementById("button").disabled = true;
                 document.getElementById('button').classList.add('btn-secondary');
                document.getElementById('button').classList.remove('btn-success');
              }
              
            },
            getMessages()
            {
               axios.get('api/messages').then(response => 
                //console.log(response.data)
                {this.messages = response.data.messages});
                //this.scrollDown();
            },

            

           async insertMessage()
            {

                axios.post('api/messages',
                  {message: this.message}
                );

                return 1
            },

            insertAndScroll()
            {
                this.insertMessage().then(alert('Mesajınız Gönderilmiştir!'));
                 
                  this.getMessages();
                  this.scrollDown();
                
               

            }

           
        
        }
    }
</script>
