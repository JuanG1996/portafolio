<?php
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $para = 'arc_juan_1@hotmail.com';
    $titulo = 'Contacto desde portafolio';
    $header = 'From: ' . $email;
    $msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";
    
    if ($_POST['submit']) {
    if (mail($para, $titulo, $msjCorreo, $header)) {
    echo "<script language='javascript'>
    alert('Mensaje enviado, muchas gracias.');
    window.location.href = 'contacto.html';
    </script>";
    } else {
       echo "<script languague = 'javascript'>alert('No se pudo enviar el correo, contactame mediante linkedin por favor');</script>";
    }
    }
?>