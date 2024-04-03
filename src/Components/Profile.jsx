import React from 'react'
function Profile() {
  const updateUser = ()=>{
    
    
  }
  return (
    <div>
      <div className='text-center'>
        <h3 className='mt-5'>My Profile</h3>
        <label>
          <input type="file" style={{ display: 'none' }} />
          <img src="https://png.pngtree.com/png-vector/20190716/ourmid/pngtree-add-user-icon-trendy-style-isolated-background-png-image_1543872.jpg" alt="" width={'200px'} />
        </label>
        <div className='mx-5 px-5'>
          <input type="text" placeholder='Name' className='form-control mb-2 mt-3' />
          <input type="text" placeholder='Github' className='form-control mb-2' />
          <input type="text" placeholder='Live Link' className='form-control mb-2' />
          <button className='btn btn-dark m-4' onClick={updateUser}>Update</button>

        </div>
      </div>
    </div>
  )
}

export default Profile