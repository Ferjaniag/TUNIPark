const Images = [
    { image: require("../assets/parking.png") },
    { image: require("../assets/parking2.png") },
    { image: require("../assets/parking3.png") },
    { image: require("../assets/parking4.png") },
];




export const locations=[
{
    coordinates: {
    latitude: 36.881100,
    longitude: 10.325990 }, 
    title: "Parking place",
    description: "This is the best parking place",
    image: Images[0].image,
    capacity: 100,
    adresse: "Marsa"


}, 
{
    coordinates: {
    latitude: 36.895220,
    longitude: 10.295200 },
    title: "Parking place",
    description: "This is the best parking place",
    image: Images[1].image,
    capacity:200,
    adresse: "Gammarth"

}, 

{
    coordinates: {
    latitude: 36.853809,
    longitude: 10.330460 } ,
    title: "Parking place",
    description: "This is the best parking place",
    image: Images[2].image,
    capacity:50,
    adresse: "Carthage"


}, 
{
    coordinates: {
    latitude: 36.850420,
    longitude: 10.319280 },
    title: "Parking place",
    description: "This is the best parking place",
    image: Images[3].image,
    capacity:70,
    adresse: "Carthage Byrsa"


}



]