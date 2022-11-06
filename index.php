<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/css/root.css">
    <link rel="stylesheet" href="./public/css/header.css">
    <link rel="stylesheet" href="./public/css/top-menu-css/top-menu.css">
    <link rel="stylesheet" href="./public/css/customer-review-css/customer-review-css.css">
    <title>Resto</title>
</head>
<body>
    <?php
        include_once('./top-section/top-section.php');
    ?>
    <?php
        include_once('./top-menu/top-menu.php');
    ?>
    <?php
        include_once('./customer-review/customer-review.php');
    ?>
    <?php
        include_once('./static/footer.php');
    ?>
    <script src="./public/js/resto-storage/RestoStorage.js"></script>
    <script src="./public/js/top-menu/top-menu.js"></script>
    <script src="./public/js/top-section/top-section.js"></script>
    <script src="./public/js/customer-review/customer-review.js"></script>
</body>
</html>