<section>
  
  <div class="title-toggle">
    <div>Featured Applications</div>
    <div><a href="javascript:void(0)" @click="toggle">Save and Close</a></div>
  </div>
  <div class="app-pin-container">
    <app-pin v-for="app in apps"></app-pin>
    <app-empty v-if="apps.length < 6"></app-empty>
  </div>

</section>