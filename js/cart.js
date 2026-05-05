        $(document).ready(function() {
            // Update quantity and total on increment/decrement button click
            $(".increment").click(function() {
                var row = $(this).closest("tr");
                var quantityDisplay = row.find(".quantity-display");
                var price = parseFloat(row.find(".price").text().replace('$', ''));
                var quantity = parseInt(quantityDisplay.text());

                quantity++;
                quantityDisplay.text(quantity);
                row.find(".total").text('$' + (quantity * price).toFixed(2));
            });

            $(".decrement").click(function() {
                var row = $(this).closest("tr");
                var quantityDisplay = row.find(".quantity-display");
                var price = parseFloat(row.find(".price").text().replace('$', ''));
                var quantity = parseInt(quantityDisplay.text());

                if (quantity > 1) {
                    quantity--;
                    quantityDisplay.text(quantity);
                    row.find(".total").text('$' + (quantity * price).toFixed(2));
                }
            });

            // Remove item from cart
            $(".removed_cart").click(function() {
                $(this).closest("tr").remove();
            });
        });

	  