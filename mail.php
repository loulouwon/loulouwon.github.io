<!DOCTYPE>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
<title>email처리</title>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
</head>
<body id="body">
<script>

<?php
$to = $my_email;
$subject = $Y_title;
$conTx = "이름 : ".$Y_name." \n"."전화번호 : ".$Y_tel_1." - ".$Y_tel_2." - ".$Y_tel_3." \n".$Y_contx;
$message = $conTx;
$from = $Y_email;
$headers = "From: $from";
$sendMail = mail($to,$subject,$message,$headers);

if($sendMail) echo "top.okEmail()";
else echo "top.noEmail()";
?>
</script>
</body>
</html>