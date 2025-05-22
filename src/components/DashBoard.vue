<template>
  <div class="dashboard">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">Jhl</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-left d-flex gap-lg-3">
            <li class="nav-item">
              <a class="nav-link" href="#">Home
              <i class="fa-solid fa-angle-down"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">For Candidate
              <i class="fa-solid fa-angle-down"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">For Employee
              <i class="fa-solid fa-angle-down"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pages
              <i class="fa-solid fa-angle-down"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Help</a>
            </li>
          </ul>
          <div class="d-flex align-items-center gap-5">
            <span><i class="fa-solid fa-right-to-bracket"></i> Sign-In</span>
            <button class="btn btn-danger btn-sm"><i class="fa-solid fa-cloud-arrow-up"></i> Upload Resume</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Grid Section -->
    <div class="grid-style d-flex flex-column p-5">
      <p class="display-5 mt-5">Candidate Grid-Style 01</p>
      <h5>Home / Candidate / Candidate grid 01</h5>
    </div>

    <!-- Card Section -->
    <div class="container mt-4">
      <div class="row align-items-stretch">
        <div v-for="profile in paginatedProfiles" :key="profile.id" class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 w-75 text-center p-3">
            <img :src="profile.image" class="rounded-circle mx-auto mb-3" style="width:80px; height:90px; object-fit:cover;" :alt="profile.name" />
            <div>
              <div class="mb-2">
                <span v-for="n in 5" :key="n" class="star" :class="{ active: n <= Math.round(profile.rating) }">★</span>
                <span class="ms-1 fw-bold">{{ profile.rating }}</span>
              </div>
              <h5 class="fw-bold mb-1">{{ profile.name }}</h5>
              <div class="text-muted mb-3">{{ profile.role }}</div>
              <div class="d-flex justify-content-center align-items-center mb-2 flex-wrap">
                <span class="me-3 text-success fw-bold">
                  <i class="fa-solid fa-clock"></i> {{ profile.hourlyRate }}/H
                </span>
                <span class="text-secondary">
                  <i class="fa-solid fa-coins"></i> {{ profile.experience }} Years exp.
                </span>
              </div>
              <div class="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                <button class="btn btn-outline-primary btn-sm">Message</button>
                <button class="btn btn-success btn-sm">View Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="d-flex justify-content-center align-items-center flex-wrap my-4 gap-2">
      <button class="btn btn-outline-secondary btn-sm"
              :disabled="currentPage === 1"
              @click="prevPage">
        Prev
      </button>
      <button v-for="page in totalPages"
              :key="page"
              class="btn btn-sm"
              :class="{'btn-primary': currentPage === page, 'btn-outline-primary': currentPage !== page}"
              @click="goToPage(page)">
        {{ page }}
      </button>
      <button class="btn btn-outline-secondary btn-sm"
              :disabled="currentPage === totalPages"
              @click="nextPage">
        Next
      </button>
    </div>

<div class="container-fluid bg-light mt-5">
  <section class="container py-5 text-center">
    <div>
      <h1 class="display-10 fw-bold mb-3 pt-4">Find The Perfect Job</h1>
      <p class="h4 fw-bold mb-3">on Job Stock That is Superb For You</p>
      <p class="text-muted mb-4 mx-auto" style="max-width: 600px;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni velit animi explicabo dolores voluptas sit laboriosam corrupti! 
        Dignissimos suscipit quae maxime? 
        Labore dolores in quidem maxime a totam necessitatibus vero?
      </p>
    </div>
    </section>
    <div class="d-flex justify-content-center gap-3 mb-4">
      <button class="btn" style="background-color: #298f31; color: white;">Upload Resume</button>
      <button class="btn btn-outline-secondary">Join our team</button>
    </div>


  <div class="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mb-5" style="max-width: 400px; margin: 0 auto;">
    <input type="email" placeholder="Enter Your email" class="form-control rounded-pill px-3 py-2" />
    <button class="btn btn-dark rounded-pill px-4 py-2">Subscribe</button>
  </div>

  <!-- Stats Grid -->
  <section class="bg-white py-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-6 col-md-3 mb-4 mb-md-0">
          <div class="h2 fw-bold mb-1">4K</div>
          <div class="text-muted">Job Posted</div>
        </div>
        <div class="col-6 col-md-3 mb-4 mb-md-0">
          <div class="h2 fw-bold mb-1">3M</div>
          <div class="text-muted">Happy Customers</div>
        </div>
        <div class="col-6 col-md-3 mb-4 mb-md-0">
          <div class="h2 fw-bold mb-1">27K</div>
          <div class="text-muted">Freelancers</div>
        </div>
        <div class="col-6 col-md-3">
          <div class="h2 fw-bold mb-1">73+</div>
          <div class="text-muted">Companies</div>
        </div>
      </div>
    </div>
  </section>
</div>


    <!-- Footer Columns -->
    <footer class="bg-light text-black py-5">
  <div class="container">
    <div class="row g-4">
      <!-- Address Column -->
      <div class="col-12 col-md-6 col-lg-4 col-xl-5 w-25">
        <h3 class="h5 fw-bold mb-3">Collins Street West,</h3>
        <h3 class="h5 fw-bold mb-3">Victoria Near Bank Road</h3>
        <p class="text-black-50 mb-0">Australia OH812456.</p>
      </div>
      <!-- For Clients -->
      <div class="col-6 col-md-3 col-lg-2">
        <h4 class="fw-bold mb-3">For Clients</h4>
        <ul class="list-unstyled text-black-50">
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Talent Marketplace</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Payroll Services</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Direct Contracts</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Hire Worldwide</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Hire in the USA</a></li>
          <li><a href="#" class="text-black-50 text-decoration-none">How to Hire</a></li>
        </ul>
      </div>
      <!-- Our Resources -->
      <div class="col-6 col-md-3 col-lg-2">
        <h4 class="fw-bold mb-3">Our Resources</h4>
        <ul class="list-unstyled text-white-50">
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Free Business tools</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Affiliate Program</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Success Stories</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Upsock Reviews</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Resources</a></li>
          <li><a href="#" class="text-black-50 text-decoration-none">Help & Support</a></li>
        </ul>
      </div>
      <!-- The Company -->
      <div class="col-6 col-md-3 col-lg-2">
        <h4 class="fw-bold mb-3">The Company</h4>
        <ul class="list-unstyled text-black-50">
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">About Us</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Leadership</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Contact Us</a></li>
          <li class="mb-2"><a href="#" class="text-black-50 text-decoration-none">Investor Relations</a></li>
          <li><a href="#" class="text-black-50 text-decoration-none">Trust, Safety & Security</a></li>
        </ul>
      </div>
      <!-- Download Apps -->
      <div class="col-6 col-md-3 col-lg-2">
        <h4 class="fw-bold mb-3">Download Apps</h4>
        <button class="btn btn-secondary w-100 mb-3">Android App on GOOGLE PLAY</button>
        <button class="btn btn-secondary w-100">Available on the Apple Store</button>
      </div>
    </div>
  </div>
</footer>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: fixed;
  top: 0;
}

.grid-style {
  font-size: 2rem;
  background-color: #04353E;
  font-family: 'Poppins',sans-serif;
  height: 45vh;
  padding-left: 1.5rem;
  color: white;
}
 
.grid-style p {
  margin: 0;
  padding-top: 2.5%;
}

.star {
  color: #ddd;
  font-size: 1.1rem;
}

.star.active {
  color: #FFA500;
}

@media (max-width: 768px) {
  .nav-left, .nav-right {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .nav-items {
    gap: 1rem;
  }
}

.container-footer{
  width: 100%;
  height: 50vh;
  background-color: #081644;
  color: white;
}

.resume-buttons{
  gap: 20px;
}


</style>
