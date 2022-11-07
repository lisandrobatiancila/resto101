<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Orders</title>
    <link rel="icon" type="image/x-icon" href="../public/images/restaurant.png">
    <link rel="stylesheet" href="../public/css/root.css">
    <link rel="stylesheet" href="../public/css/header.css">
    <link rel="stylesheet" href="../public/css/view-order/view-order.css">
</head>
<body>
    <?php 
        include_once("../top-section/top-section.php");
    ?>
    <section class="container">
        <div class="order-container" id="order-container">
            
        </div>
    </section>
    <?php 
        include_once("../static/footer.php");
    ?>
    <script src="../public/js/resto-storage/RestoStorage.js"></script>
    <script src="../public/js/top-section/top-section.js"></script>
    <script src="../public/js/view-order/view-order.js"></script>
</body>
</html>