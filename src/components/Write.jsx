import Add from '../../public/icons/Add'

import '../../public/style/write.css'


function Write() {
    return (
        <div className='write'>

            <img className='writeImg' src="https://www.kystlandet.com/sites/kystlandet.com/files/2022-06/kystlandet-bakkelandet-braedstrup-holmely-glamping-treetop-shelter-sarah-green-1-1200px.jpg" />

            <form className='writeForm'>

                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <Add />
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" placeholder='title' className='writeInput' autoFocus={true} />
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>

            </form>

        </div>
    )
}

export default Write