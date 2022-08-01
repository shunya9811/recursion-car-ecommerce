var productHeader = {
    template: `
    <header>
        <h1 class="pageTitle text-white">商品一覧</h1>

        <!--検索欄-->
        <div class="d-flex justify-content-between">
            <div class="result text-white">
                検索結果 <span class="count">{{ count }}件</span>
            </div>
            <div class="d-flex">
                <div class="mx-3">
                    <select class="form-select" aria-label="Default select example" v-bind:value="showItem" v-on:change="$emit('showItemChanged', $event.targer.value)">
                        <option selected="selected">Category</option>
                        <option value="Tesla">Telsa</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Lamborghini">Lamborghini</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                    </select>
                </div>
                <div>
                    <select class="form-select" aria-label="Default select example" v-bind:value="sortOrder" v-on:change="$emit('sortOrderChanged',parseInt($event.target.value))">
                        <option selected="selected">Sort by:</option>
                        <option value="1">Price: Low to High</option>
                        <option value="2">Price: High to Low</option>
                        <option value="3">Newest Arrivals</option>
                    </select>
                </div>
            </div>
        </div>
    </header>`,
    props: ['count','showItem','sortOrder']
};