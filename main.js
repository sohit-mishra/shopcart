var fruit = document.querySelector("#fruits_row");
        var fruitsurl = "/fruits.json";
        var vegetable = document.querySelector("#vegetable_row");
        var vegetableurl = "/vegetable.json";

        try {
            async function fruitfetchData() {
                var response = await fetch(fruitsurl);
                var result = await response.json();
                frenderdata(result.data);
            }

            async function vegetablefetchData() {
                var response = await fetch(vegetableurl);
                var result = await response.json();
                vrenderdata(result.data);
            }

            fruitfetchData();
            vegetablefetchData();
        } catch (error) {
            console.error(error);
        }


        function frenderdata(data) {
            data.forEach(element => {
                var items = document.createElement('div');
                items.className = "items";
                var img = document.createElement('img');
                img.src = element.img;
                var h2 = document.createElement('h2');
                h2.textContent = element.name;
                var span = document.createElement('span');
                span.textContent = "₹ " + element.price;
                h2.append(span);
                var para = document.createElement('p');
                para.textContent = element.desc;
                var button = document.createElement('button');
                button.textContent = "Add to Cart";
                items.append(img, h2, para, button);
                fruit.append(items);
            });
        }

        function vrenderdata(data) {
            data.forEach(element => {
                var items = document.createElement('div');
                items.className = "items";
                var img = document.createElement('img');
                img.src = element.img;
                var h2 = document.createElement('h2');
                h2.textContent = element.name;
                var span = document.createElement('span');
                span.textContent = "₹ " + element.price;
                h2.append(span);
                var para = document.createElement('p');
                para.textContent = element.desc;
                var button = document.createElement('button');
                button.textContent = "Add to Cart";
                items.append(img, h2, para, button);
                vegetable.append(items);
            });
        }

        function toggle(){
           var block = document.querySelector('header .right ul');
           block.style.width = "70%";
        }

        function toggleclose(){
           var block = document.querySelector('header .right ul');
           block.style.width = "0";
        }