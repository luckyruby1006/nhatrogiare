export const createPost = (project) => {
        return (dispatch, getState, {getFirebase, getFirestore}) =>{
         //    make a sync call to database
         const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            date: new Date()
        }).then( ()=>{ 
            dispatch({type:'CREATE_POST', project });
    }).catch((err)=>{
             dispatch({type:'CREATEPOST_ERROR',err})})

       
    }
}

export const update = (project,id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
     //    make a sync call to database
     const firestore = getFirestore();
    firestore.collection('projects').doc(id).update({
        ...project
    }).then( ()=>{ 
        dispatch({type:'UPDATE_POST', project });
}).catch((err)=>{
         dispatch({type:'UPDATE_POST_ERROR',err})})

   
}
}

export const deletePost = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
     //    make a sync call to database
     const firestore = getFirestore();
     firestore.collection('projects').doc(id).delete()
     .then( ()=>{ 
        dispatch({type:'DELETE_POST', id });
}).catch((err)=>{
         dispatch({type:'DELETE_POST_ERROR',err})})

   
}
}
