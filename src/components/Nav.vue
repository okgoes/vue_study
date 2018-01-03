<template>
  <b-row>
    <b-col lg='9' md='9' xs='9' xl='9'>
      <b-card title="Card Title"
            img-src="https://lorempixel.com/600/300/food/5/"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-12">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-col>
  <b-col lg='3' md='3' xs='3' xl='3'>
   <b-card-group deck>
      <b-card header="featured"
              header-tag="header"
              footer="Card Footer"
              footer-tag="footer"
              title="Title">
          <p class="card-text">Header and footers using props.</p>
          <b-button href="#"
                    variant="primary">Go somewhere</b-button>
      </b-card>
    </b-card-group>
  </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'Nav'
}
</script>