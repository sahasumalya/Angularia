<?php

	$a=$_GET["a"];
	$b=$_GET["b"];
	$res=$a+$b;
	$object=array("sum"=>$res);
	$obj=json_encode($object);
	echo $obj;

		 

?>