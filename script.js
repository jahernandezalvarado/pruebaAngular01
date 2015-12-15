var app=angular.module("app",[]);
 
function PruebaController($scope)
{
  $scope.mensaje="Hi World";

  $scope.cambiarMensaje = function()
  {
    $scope.mensaje="Usted quiere un cambio";
  }
}

function SeguroController($scope) {
  $scope.seguro={
    nif:"7101",
    nombre:"Carmen",
    ape1:"Perez",
    edad:35,
    sexo:"M",
    casado:false,
    numHijos:0,
    embarazada:false,
    coberturas: {
      oftalmologia:true,
      dental:true,
      fecundacionInVitro:false
    },
    enfermedades:{
      corazon:false,
      estomacal:false,
      rinyones:false,
      alergia:true,
      nombreAlergia:"Tontología"
    },
    fechaNacimiento:new Date("1980/01/16")
  }
}
