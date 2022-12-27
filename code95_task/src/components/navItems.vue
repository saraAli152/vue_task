<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<div>
   <nav class="navbar navbar-expand-md navbar-light fw-bold py-5 ">
            <div class="container  ">
              <a class="navbar-brand fw-bold "  href="#"><img  src="../assets/img/LogoMakr-444lpX.png" alt=""></a>
              <button class="navbar-toggler " style="background-color:  var(--bs-navbar-color);" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
           </button>
             
              <div class="collapse navbar-collapse " style=" " id="navbarScroll">
                <ul class="navbar-nav  my-2 my-lg-0 navbar-nav-scroll ms-auto" style="--bs-scroll-height: 100px;">
                  <li class="nav-item">
                    <a class="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdwon
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                      <li><a class="dropdown-item" href="#">link</a></li>
                      <li><a class="dropdown-item" href="#">link</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">link</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Link</a>
                  </li>
                  <li class="nav-item ms-5 ">
                  <button type="button" class="btn btn-primary ">Primary</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
  
</template>

<style scoped>
.navbar {
      color: var(--vt-c-white-soft); 
    --bs-navbar-hover-color:rgba(157, 87, 8, 0.412);
    --bs-navbar-active-color: #f17945; 
}
.btn-primary{
    width:7rem ;
    border-radius: 30px;
  --bs-btn-bg:#f17945;
  --bs-btn-hover-bg:#f17945a1;
  --bs-btn-active-bg:#f17945a1;
    border:0;
}

</style>
