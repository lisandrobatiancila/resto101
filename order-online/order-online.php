<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../public/css/root.css">
    <link rel="stylesheet" href="../public/css/header.css">
    <link rel="stylesheet" href="../public/css/order-online/order-online.css">
    <title>Signin</title>
</head>
<body>
    <?php
        include_once('../top-section/top-section.php');
    ?>
    <section class="container">
        <div class="order-online-content">
            <form>
                <div>
                    <label for="firstname" class="text-capitalize">firstname</label>
                    <input type="text" name="firstname" placeholder="firstname">
                </div>
                <div>
                    <label for="lastname" class="text-capitalize">lastname</label>
                    <input type="text" name="lastname" placeholder="lastname">
                </div>
                <div>
                    <label for="contactno" class="text-capitalize">contactno</label>
                    <input type="text" name="contactno" placeholder="contactno">
                </div>
                <div>
                    <label for="address" class="text-capitalize">address</label>
                    <input type="text" name="address" placeholder="address">
                </div>
                <input type="button" value="submit" class="btn text-capitalize" />
            </form>
        </div>
    </section>
    <?php
        include_once('../static/footer.php');
    ?>
    <script src="../public/js/resto-storage/RestoStorage.js"></script>
    <script src="../public/js/top-section/top-section.js"></script>
</body>
</html>