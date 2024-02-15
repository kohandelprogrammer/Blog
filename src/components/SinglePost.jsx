import Delete from '../../public/icons/Delete'
import Edit from '../../public/icons/Edit'

import '../../public/style/singlepost.css'


function SinglePost() {
    return (
        <div className='singlePost'>

            <div className="singlePostWrapper">

                <img src="https://www.violinschool.com/wp-content/uploads/2020/04/Morning-Has-Broken-600px-400px.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <Delete />
                        <Edit />
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>sajede</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>

                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolor velit. Debitis nam eligendi reprehenderit ullam mollitia voluptate molestias. Officiis voluptas illo itaque quis amet suscipit exercitationem, enim nulla. Voluptates.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur minus dicta nemo ea praesentium odit voluptates, quidem commodi ad velit deleniti perspiciatis eligendi. Similique dolores amet expedita, ad quis repellat.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam harum possimus architecto ratione, minima non dolores voluptates incidunt. Mollitia id facere repellat neque asperiores sed animi placeat ad accusantium necessitatibus!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil culpa ex voluptas error in fugit aliquam cum dolores! Nemo veniam exercitationem, ipsa rem illo distinctio pariatur consequuntur! Tempora, nulla doloribus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid ipsam, nobis quas magnam voluptatum doloribus earum quis similique vero autem laboriosam magni officiis veritatis facere aut beatae, exercitationem est?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis perferendis fuga libero ducimus deserunt voluptatum eius sunt accusantium quisquam minima. Consequuntur sunt, repudiandae dignissimos laboriosam consequatur quisquam at accusamus eveniet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur animi quae doloribus possimus laudantium numquam commodi laborum reiciendis suscipit eos magni, doloremque veniam praesentium incidunt ullam fugit nisi fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias placeat corporis accusamus dolore ea quasi nostrum suscipit alias repudiandae accusantium, ex quisquam fuga esse voluptate. Neque odio explicabo quo dicta.

                </p>

            </div>

        </div>
    )
}

export default SinglePost