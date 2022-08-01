Vue.component('product-list', {
    template: `
    <div class="container">
        <product-header    
            v-bind:count = "filteredList.length"
            v-bind:showItem = "showItem"
            v-bind:sortOrder = "sortOrder"
            v-on:showItemChanged = "showItemChanged"
            v-on:sortOrderChanged = "sortOrderChanged"
        >
        </product-header>
        <div class="d-flex flex-wrap justify-content-between pt-4">
            <product
                v-for="product in filteredList"
                v-bind:product="product"
                v-bind:key="product.id"
            >
            </product>
        </div>
    </div>`,
    components: {
        'product-header': productHeader,
        'product': product
    },
    props: ['products'],
    data: function() {
        return {
            //カテゴリー
            showItem: "",
            //並び替えの選択値
            sortOrder: 1
        }
    },
    methods: {
        showItemChanged: function(category) {
            this.showItem = category;
        },
        //並び替えの選択値が変わったときに呼び出されるメソッド
        sortOrderChanged: function(order) {
            //現在の選択値を新しい選択値で上書きする
            this.sortOrder = order;
        }
    },
    computed: {
        //割り込みの商品リストを返す算出プロパティ
        filteredList: function() {
            //割り込み後の商品リストを格納する新しい配列
            var newList = [];
            for (var i = 0; i < this.products.length; i++) {
                //表示対象かどうかを判定するフラグ
                var isShow = true;
                //i番目の商品が表示対象かどうか判定する
                if (this.showItem != "" && this.showItem != this.products[i].category) {
                    isShow = false;
                }
                
                if (isShow) {
                    newList.push(this.products[i]);
                }
            }

            //新しい配列を並び替える
            if (this.sortOrder == 1) {
                newList.sort(function(a, b){
                    return a.price - b.price;
                });
            } else if (this.sortOrder == 2) {
                newList.sort(function(a, b){
                    return b.price - a.price;
                });
            } else if (this.sortOrder == 3) {
                newList.sort(function(a, b){
                    return b.date - a.date;
                })
            }
            //割り込み後の商品リストを返す
            return newList;
        }
    }
});