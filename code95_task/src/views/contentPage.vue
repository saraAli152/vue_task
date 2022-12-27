<script setup>
import NavItems from '../components/navItems.vue'
</script>

<template>
<div class="header">
        <navItems />
          <section id="Hero" class="text-light   text-start  header   py-5">
            <div class="container">
                <div class="row raw-cols-lg-2  " >
                    <div class="col col-lg-6  " >
                        <h1 class=" fw-bold py-5 ">It's a Big World Out There,Explore </h1>
                        <p class="fs-6">Image
                            It's a Big World Out There, Go Explore
                            A small river named Duden flows by their place and supplies it with
                             the necessary regelialia. 
                             It is a paradisematic country, in which roasted
                              parts of sentences fly into your mouth.</p>

                    </div>
                 
                   <a class="watch d-flex justify-content-md-center justify-content-lg-start py-5 " href="https://youtu.be/BwNyfylA7do"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path></svg>
                    <p > watch Video</p>
                </a>
           
                </div>
            </div>
          </section>
        
        </div>
</template>
<style>
.header{
     background-image:linear-gradient(rgba(0, 0, 0, 0.25) ,rgba(0, 0, 0, 0.25)) ,url('../assets/img/hero_1.jpg');
    background-attachment: fixed;
    background-size:  cover;
    width:100%
}

.header  svg{
    width: 5px;
    width: 20px;
    float: left;
    margin-right: 20px;
    padding: 20p;
    cursor: pointer;
}
.header a{
text-decoration: none;
color:#f17945 ;
}

</style>
