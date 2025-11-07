const items = [
    {
        id: 'I001',
        image: 'images/tv_stand.png',
        item_name: 'Jasper Rustic Wood T.V Stand',
        original_price: 78000,
        current_price: 71000,
        is_discount: true,
        is_new: true
    },
    {
        id: 'I002',
        image: 'images/chairs.png',
        item_name: 'Goldfrue Premium Set of Chairs',
        original_price: 21000,
        current_price: 15000,
        is_discount: true,
        is_new: true
    },
    {
        id: 'I003',
        image: 'images/Modern Sofa.png',
        item_name: 'Aiden Nordic Minimal Sofa',
        original_price: 26000,
        current_price: 23599,
        is_discount: true,
        is_new: true
    },
    {
        id: 'I004',
        image: 'images/dresser.png',
        item_name: 'Arinol Luxury Dressing Table Set',
        original_price: 45000,
        current_price: 41599,
        is_discount: true,
        is_new: true
    }
];

const categories = [
    {
        id: 'C001',
        image: 'images/Livingroom.png',
        title: 'Living Room',
        description: 'Sofas, coffee tables, and more',
        link: 'explore1.html'
    },
    {
        id: 'C002',
        image: 'images/Bedroom.png',
        title: 'Bedroom',
        description: 'Beds, nightstands, and more',
        link: 'explore2.html'
    },
    {
        id: 'C003',
        image: 'images/Dining.png',
        title: 'Dining Room',
        description: 'Dining tables, chairs, and more',
        link: 'explore3.html'
    }
];

const explore1 = [
    {
        id: 'E001',
        image: 'images/Modern Sofa.png',
        item_name: 'Aiden Nordic Minimal Sofa',
        original_price: 26000,
        current_price: 23599,
        is_discount: true,
        is_new: true
    },
    {
        id: 'E002',
        image: 'images/bookshelve.png',
        item_name: 'Kailash Premium Mango Wood Bookshelf',
        original_price: 18000,
        current_price: 15000,
        is_discount: true,
        is_new: true
    },
    {
        id: 'E003',
        image: 'images/tv_stand.png',
        item_name: 'Jasper Rustic Wood T.V Stand',
        original_price: 78000,
        current_price: 71000,
        is_discount: true,
        is_new: true
    },
    {
        id: 'E004',
        image: 'images/Coffee Table.png',
        item_name: 'Rustic Oak Round Coffee Table',
        original_price: 6000,
        current_price: 5799,
        is_discount: true,
        is_new: true
    },
    {
        id: 'E005',
        image: 'images/rug.png',
        item_name: 'Sifa Hand Woven Rug',
        original_price: 1700,
        current_price: 1300,
        is_discount: true,
        is_new: false
    },
    {
        id: 'E006',
        image: 'images/Armchair.png',
        item_name: 'Vintage Leather Armchair',
        original_price: 60000,
        current_price: 50000,
        is_discount: true,
        is_new: true
    },
    {
        id: 'E007',
        image: 'images/Floor Lamp.png',
        item_name: 'Arc Floor Lamp',
        original_price: 7000,
        current_price: 6100,
        is_discount: true,
        is_new: true
    }
];
const explore2 = [
    {
        id: 'F001',
        image: 'images/bedroom.png',
        item_name: 'Modern White Velvet Wingback Bed',
        original_price: 180000,
        current_price: 155000,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F002',
        image: 'images/dresser.png',
        item_name: 'Arinol Luxury Dressing Table Set',
        original_price: 45000,
        current_price: 41599,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F003',
        image: 'images/matress.png',
        item_name: 'Latex-Ortho Foam Soft & Firm Mattress',
        original_price: 1800,
        current_price: 1500,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F004',
        image: 'images/bedroom_lamp.png',
        item_name: 'Nestlie Small Crystal Lamp',
        original_price: 3000,
        current_price: 2899,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F005',
        image: 'images/mirror.png',
        item_name: 'Venetian Premium Wall Mirror',
        original_price: 5499,
        current_price: 5100,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F006',
        image: 'images/wardrobe.png',
        item_name: 'Andrie 3 Door Wardrobe with Drawer',
        original_price: 76000,
        current_price: 64599,
        is_discount: true,
        is_new: true
    }
];

const explore3 = [
    {
        id: 'F001',
        image: 'images/hutch.png',
        item_name: 'Sheesham Wood Christy Hutch',
        original_price: 40000,
        current_price: 35000,
        is_discount: true,
        is_new: false
    },
    {
        id: 'F002',
        image: 'images/dining_set.png',
        item_name: 'Wavefit Vallina Dining Table Set',
        original_price: 68000,
        current_price: 60000,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F003',
        image: 'images/Coffee Table.png',
        item_name: 'Rustic Oak Coffee Table',
        original_price: 6000,
        current_price: 5799,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F004',
        image: 'images/Dining.png',
        item_name: 'Artistic Premium Dining Table Set',
        original_price: 75000,
        current_price: 69500,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F005',
        image: 'images/chairs.png',
        item_name: 'Goldfrue Premium Set of Chairs',
        original_price: 21000,
        current_price: 15000,
        is_discount: true,
        is_new: true
    },
    {
        id: 'F006',
        image: 'images/console_table.png',
        item_name: 'Murt Modern Console Table',
        original_price: 20000,
        current_price: 18000,
        is_discount: true,
        is_new: false
    },
];

window.items = items;
window.categories = categories;
window.explore1 = explore1;
window.explore2 = explore2;
window.explore3 = explore3;