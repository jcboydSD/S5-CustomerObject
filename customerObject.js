let typeContact = 'call';

let customer = {
    custID: 17156,
    name: 'Mitchell Klinghorn',
    address: '101 S Main St, Kaysville, UT 84037',
    phone: '801-593-2500',
    email: 'mitchell.klinghorn@gmail.com',
    displayInfo(){
        console.log(`Contact info for customer ID ${this.custID}, ${this.name}`);
    },
    contactPhone(){
        console.log(`Call the customer at ${this.phone}`);
    },
    contactEmail(){
        console.log(`Send email to the customer at ${this.email}`);
    },
    contactText(){
        console.log(`Text the customer at ${this.phone}`);
    },
    contactMail(){
        console.log(`Send a letter to the customer at ${this.address}`);
    }
};
customer.displayInfo();
switch(typeContact){
    case 'phone': case 'call':
        customer.contactPhone();
        break;
    case 'text':
        customer.contactText();
        break;
    case 'email':
        customer.contactEmail();
        break;
    case 'mail': case 'invoice': case 'ad':
        customer.contactMail();
        break;
}
