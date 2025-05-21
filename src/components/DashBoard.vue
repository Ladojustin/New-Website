<template>
  <div class="dashboard">
    <nav class="navbar">
      <div class="nav-items d-flex">
        <div class="nav-left text-decoration-none gap-4">
            <a href="#" class="nav-item">Home</a>
            <a href="#" class="nav-item">For Candidate</a>
            <a href="#" class="nav-item">For Employee</a>
            <a href="#" class="nav-item">Pages</a>
            <a href="#" class="nav-item">Help</a>
        </div>
        <div class="nav-right justify-content-lg-end justify-content-center">
            <span><i class="fa-solid fa-right-to-bracket"></i>Sign-In</span>
            <button><i class="fa-solid fa-cloud-arrow-up"></i> Upload Resume</button>
        </div>
      </div>
    </nav>
    <div class="grid-style ">
      <p>Grid-Style</p>
    </div>
    <!--Card section starts here-->
    <div class="container mt-4">
    <div class="row align-items-center">
      <div v-for="profile in paginatedProfiles" :key="profile.id" class="col-md-4 mb-4">
        <div class="card w-75 d-flex h-100 text-center p-3 align-items-center ">
          <img :src="profile.image" class="rounded-circle mx-auto mb-3" style="width:80px; height:90px; object-fit:cover;" :alt="profile.name" />
          <div>
            <div class="mb-2">
               <span v-for="n in 5" :key="n" class="star" :class="{ active: n <= Math.round(profile.rating) }">★</span>
              <span class="ms-1 fw-bold">{{ profile.rating }}</span>
            </div>
            <h5 class="fw-bold mb-1">{{ profile.name }}</h5>
            <div class="text-muted mb-3">{{ profile.role }}</div>
            <div class="d-flex justify-content-center align-items-center mb-2">
              <span class="me-3 text-success fw-bold">
                <i class="fa-solid fa-clock"></i>{{ profile.hourlyRate }}/H
              </span>
              <span class="text-secondary">
                <i class="fa-solid fa-coins"></i> {{ profile.experience }} Years exp.
              </span>
            </div>
            <div class="d-flex justify-content-center gap-2 mt-3">
              <button class="btn btn-outline-primary">Message</button>
              <button class="btn btn-success">View Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
<!--Pagination-->
  <div class="d-flex justify-content-center align-items-center my-4">
      <button class="btn btn-outline-secondary mx-1"
              :disabled="currentPage === 1"
              @click="prevPage">
        Previous
      </button>
      <button v-for="page in totalPages"
              :key="page"
              class="btn mx-1"
              :class="{'btn-primary': currentPage === page, 'btn-outline-primary': currentPage !== page}"
              @click="goToPage(page)">
        {{ page }}
      </button>
      <button class="btn btn-outline-secondary mx-1"
              :disabled="currentPage === totalPages"
              @click="nextPage">
        Next
      </button>
    </div>
  
    </div>
</template>

<script>
import { fetchProfiles } from '../model/ProfileModel.js';

export default{
    name:'DashBoard',
    data() {
    return {
      profiles: [],
      currentPage: 1,
      cardsPerPage: 3
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.profiles.length / this.cardsPerPage);
    },
    paginatedProfiles() {
      const start = (this.currentPage - 1) * this.cardsPerPage;
      return this.profiles.slice(start, start + this.cardsPerPage);  
    }
  },
  methods: {
    async loadProfiles() {
      try {
        this.profiles = await fetchProfiles();
      } catch (e) {
        console.error(e);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    nextPage() {
      this.goToPage(this.currentPage + 1);
    },
    prevPage() {
      this.goToPage(this.currentPage - 1);
    }
  },
  mounted() {
    this.loadProfiles();
  }
  
};
  

</script>

<style scoped>
.navbar {
  background: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.836);
}

.nav-left,.nav-right {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.grid-style{
  font-size: 50px;
  background-color: #298f31;
  height: 25vh;
}

.grid-style p{
  padding-top: 40px;
  padding-left: 30px;
}

.star {
  color: #ddd;
  font-size: 1.1rem;
}

.star.active {
  color: #FFA500;
}

</style>
