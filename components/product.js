var product = {
    template : `
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <img v-bind:src="product.image" class="card-img-top" alt="...">
            <h5 class="card-title pt-2">{{ product.name }}</h5>
            <p class="card-text">Category: {{ product.category }}</p>
            <p class="card-text">Price: $<span>{{ product.price | number_format }}</span></p>
            <p class="card-text">Date: {{ product.date }}</p>  
        </div>
    </div>`,
    props: ['products']
};