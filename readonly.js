const Circle = {
    area : 3.141592673596
}
Object.freeze(Circle);

Circle.area = 5;

let readonly = Circle.area;

document.write(readonly);