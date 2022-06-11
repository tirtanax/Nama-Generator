
    const { createApp } = Vue

    createApp({
    data() {
        return {
        title:'Mr',     
        namaDepan: 'Muhammad',
        namaBelakang:'Emka',
        email:'emka@gmail.com',
        gender:'male',
        picture:'https://randomuser.me/api/portraits/men/88.jpg'
        }
    },
        methods: {
            async getUser(){
                const res = await fetch('https://randomuser.me/api') 
                const  {results}  = await res.json()

                //console.log(results)

                this.title=results[0].name.title
                this.namaDepan=results[0].name.first
                this.namaBelakang=results[0].name.last
                this.email=results[0].email
                this.gender=results[0].gender
                this.picture=results[0].picture.large    
            },
        },
    })
    
    .mount('#app')
