# employeepage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
akshay

<template>
  <div class="font-sans bg-gray-50">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-16 text-center">
      <h1 class="text-4xl font-bold mb-6">Find The Perfect Job</h1>
      <p class="text-xl mb-8">on Job Stock That is Superb For You</p>
      <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
        At zero eos et accusamus et tusto odio dignissimos ducimus qui blanditis praesentium voluptatum 
        deleniti atque corrupti quos dolores et quas molestias
      </p>

      <div class="flex flex-col md:flex-row gap-4 justify-center mb-12">
        <button class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
          Upload resume
        </button>
        <a href="#" class="text-blue-600 hover:underline">Join Our Team</a>
      </div>

      <div class="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Enter Your email" 
          class="px-4 py-3 border rounded-full"
        >
        <button class="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700">
          Subscribe
        </button>
      </div>
    </section>

    <!-- Stats Grid -->
    <section class="bg-white py-12">
      <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="p-4">
          <div class="text-3xl font-bold mb-2">4K</div>
          <div class="text-gray-600">Job Posted</div>
        </div>
        <div class="p-4">
          <div class="text-3xl font-bold mb-2">3M</div>
          <div class="text-gray-600">Happy Customers</div>
        </div>
        <div class="p-4">
          <div class="text-3xl font-bold mb-2">27K</div>
          <div class="text-gray-600">Freelancers</div>
        </div>
        <div class="p-4">
          <div class="text-3xl font-bold mb-2">73+</div>
          <div class="text-gray-600">Companies</div>
        </div>
      </div>
    </section>

    <!-- Footer Columns -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4 grid md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div class="lg:col-span-2">
          <h3 class="text-lg font-bold mb-4">Collins Street West, Victoria Near Bank Road</h3>
          <p class="text-gray-400">Australia OH812456.</p>
        </div>

        <div>
          <h4 class="font-bold mb-4">For Clients</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white">Talent Marketplace</a></li>
            <li><a href="#" class="hover:text-white">Payroll Services</a></li>
            <li><a href="#" class="hover:text-white">Direct Contracts</a></li>
            <li><a href="#" class="hover:text-white">Hire Worldwide</a></li>
            <li><a href="#" class="hover:text-white">Hire in the USA</a></li>
            <li><a href="#" class="hover:text-white">How to Hire</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4">Our Resources</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white">Free Business tools</a></li>
            <li><a href="#" class="hover:text-white">Affiliate Program</a></li>
            <li><a href="#" class="hover:text-white">Success Stories</a></li>
            <li><a href="#" class="hover:text-white">Upsock Reviews</a></li>
            <li><a href="#" class="hover:text-white">Resources</a></li>
            <li><a href="#" class="hover:text-white">Help & Support</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4">The Company</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white">About Us</a></li>
            <li><a href="#" class="hover:text-white">Leadership</a></li>
            <li><a href="#" class="hover:text-white">Contact Us</a></li>
            <li><a href="#" class="hover:text-white">Investor Relations</a></li>
            <li><a href="#" class="hover:text-white">Trust, Safety & Security</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4">Download Apps</h4>
          <button class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg mb-3 w-full">
            Android App on GOOGLE PLAY
          </button>
          <button class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg w-full">
            Available on the Apple Store
          </button>
        </div>
      </div>
    </footer>

    <!-- Copyright -->
    <div class="bg-gray-900 text-gray-400 text-sm py-4 text-center">
      &copy; 2023 Job Stock. All rights reserved.
    </div>
  </div>
</template>

<style>
/* No custom CSS needed - using Tailwind utility classes */
</style>

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
