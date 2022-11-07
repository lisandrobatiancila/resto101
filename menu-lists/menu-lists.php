<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="../public/images/restaurant.png">
    <link rel="stylesheet" href="../public/css/root.css">
    <link rel="stylesheet" href="../public/css/header.css">
    <link rel="stylesheet" href="../public/css/top-menu-css/top-menu.css">
    <link rel="stylesheet" href="../public/css/customer-review-css/customer-review-css.css">
    <link rel="stylesheet" href="../public/css/menu-lists/menu-lists.css">
    <title>Menu Lists</title>
</head>
<body>
    <?php
        include_once('../top-section/top-section.php');
    ?>
    <section>
        <div class="container choices-container">
            <div class="choices-content" id="choices-content">
                <div class="sea-food-container animate_on_hover text-capitalize">
                    <h3>sea foods</h3>
                </div>
                <div class="meat-food-container text-capitalize">
                    <h3>meat</h3>
                </div>
                <div class="dessert-food-container text-capitalize">
                    <h3>desserts</h3>
                </div>
            </div>
            <div class="menu-highleted-container" id="menu-highleted-container">
                <!-- <div class="prev" id="prev">❮</div>
                <div class="next" id="next">❯</div> -->
            </div>
        </div>
    </section>
    <?php
        include_once('../static/footer.php');
    ?>
    <script src="../public/js/resto-storage/RestoStorage.js"></script>
    <script src="../public/js/top-section/top-section.js"></script>
    <script src="../public/js/menu-lists/menu-lists.js"></script>
</body>
</html>