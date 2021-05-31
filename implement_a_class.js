
class StaffList {
    //add your code here
    constructor(){
        this.list = [];
        this.nameSet = new Set();
    }
    add(name, age){
        if(this.nameSet.has(name)){
            return;
        }
        if(age <= 20){
            throw 'Error: Staff member age must be greater than 20';
        }
        else{
            this.list.push({"name":name, "age":age});
            this.nameSet.add(name);
        }
    }
    getSize(){
        return this.list.length;
    }
    remove(name){
        if(this.nameSet.has(name)){
            this.list = this.list.filter((item) => {
                return item["name"] != name;
            })
            this.nameSet.forEach((item) => {
                if (item == name) {
                    this.nameSet.delete(item);
                }
            });
            return true;
        }
        else{
            return false;
        }
    }
}
function main() {
    const obj = new StaffList();
    obj.add("Zicheng Li", 23);
    try{
        obj.add("Jessie", 16);
    } catch (e) {
        console.log(e);
    }

    obj.add("Tom", 45);
    obj.add("Tom", 29);
    console.log(obj.getSize());
    obj.remove("Tim");
    obj.remove("Tom");
    console.log(obj.getSize());
}

main();