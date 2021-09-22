
var ViewModelPerson = {
    firstname: ko.observable("Pikkili"),
    lastname: ko.observable("Kumar")
}




ko.applyBindings(ViewModelPerson);

// observable values

ViewModelPerson.firstname("narendra").lastname("ips");

// current value
ViewModelPerson.firstname(),
ViewModelPerson.firstname()