
const initState = {
    projects:[
        {name:"Căn Hộ liền kề",
        city:"Hà Nội",
        district:"Đống Đa", 
        protype:"chung cư", 
        price:"2000$",
        date:Date(), 
        img:"https://www.kientrucadong.com/diendan/wp-content/uploads/2017/04/Mau-biet-thu-3-tang-dep-hien-dai21.jpg",
        id:"1"
    },
        {name:"Căn Hộ liền kề",
        city:"Hà Nội",
        district:"Đống Đa", 
        protype:"chung cư", 
        price:"2000$",
        date:Date(), 
        img:"https://www.kientrucadong.com/diendan/wp-content/uploads/2017/04/Mau-biet-thu-3-tang-dep-hien-dai21.jpg",
        id:'2'
    },
        {name:"Căn Hộ liền kề",
        city:"Hà Nội",
        district:"Đống Đa", 
        protype:"chung cư", 
        price:"2000$",
        date:Date(), 
        img:"https://www.kientrucadong.com/diendan/wp-content/uploads/2017/04/Mau-biet-thu-3-tang-dep-hien-dai21.jpg",
        id:'3'
    },
        {name:"Căn Hộ liền kề",
        city:"Hà Nội",
        district:"Đống Đa", 
        protype:"chung cư", 
        price:"2000$",
        date:Date(), 
        img:"https://www.kientrucadong.com/diendan/wp-content/uploads/2017/04/Mau-biet-thu-3-tang-dep-hien-dai21.jpg",
        id:'4'
    }
    ]

}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
             console.log('create post' ,action.project)
            return  state;

        case 'CREATE_POST_ERROR':
            console.log('createpost error', action.err)
            return state;
       
        
        case 'DELETE_POST':
             console.log('deleted post' ,action.id)
            return  state;

        case 'DELETE_POST_ERROR':
            console.log('delete post error', action.err)
            return state;
        case 'UPDATE_POST':
             console.log('updated post' ,action.project, action.id)
            return  state;

        case 'UPDATE_POST_ERROR':
            console.log('updatepost error', action.err)
            return state;
            default:
                return state;
        
    }
 
    
}

export default projectReducer;