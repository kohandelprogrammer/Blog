import '../../public/style/post.css'

function Post() {
    return (
        <>
            <div className='post'>

                <img className='postImg'
                    src='https://www.violinschool.com/wp-content/uploads/2020/04/Morning-Has-Broken-600px-400px.jpg' />

                <div className='postInfo'>
                    <div className='postCats'>

                        <span className='postCat'>Music</span>
                        <span className='postCat'>Life</span>

                    </div>
                    <span className='postTitle'>Lorem ipsum dolor sit amet</span>
                </div>

                <p className='postDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nesciunt excepturi quidem ea impedit ut sed est ipsam fugit ipsa quis corporis totam animi, eligendi, delectus soluta sint debitis velit!</p>
                <hr />
                <span className='postDate'>1 hour ago</span>

            </div>
        </>
    )
}

export default Post