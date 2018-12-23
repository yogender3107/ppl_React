import React from 'react';
import { Link } from "react-router-dom";
import PostBase from './postBase';
import Header from '../../subcomponent/header/header';
import Footer from '../../subcomponent/footer';
class PostForm extends PostBase {
    render() {

        return (
            <div>

<Header />
                <div className="container">
                    <div className="content">
                        <div className="content_rgt">
                            <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <Link to='/createPost'>Upload Post</Link> </div>
                            <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <Link to="/addCategory">Add Category</Link> </div>
                            <div className="rght_cate">
                            </div>
                            <div className="rght_cate">
                                <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                                <div className="sub_dwn">
                                    <div className="feat_sec">
                                        <div className="feat_sec_img"><img src="images/feat_img1.png" alt="image" /></div>
                                        <div className="feat_txt">Lorem Ipusum Text</div>
                                        <div className="btm_rgt">
                                            <div className="btm_arc">Cats</div>
                                        </div>
                                    </div>
                                    <div className="feat_sec">
                                        <div className="feat_sec_img"><img src="images/feat_img2.png" alt="image" /></div>
                                        <div className="feat_txt">Lorem Ipusum Text</div>
                                        <div className="btm_rgt">
                                            <div className="btm_arc">Dogs</div>
                                        </div>
                                    </div>
                                    <div className="feat_sec">
                                        <div className="feat_sec_img"><img src="images/feat_img3.png" alt="image" /></div>
                                        <div className="feat_txt">Lorem Ipusum Text</div>
                                        <div className="btm_rgt">
                                            <div className="btm_arc">Rabbits</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content_lft">
                            <div className="contnt_1">


                                <div className="contnt_2">
                                    <br />
                                    <form onSubmit={this.createPost}>

                                        Title:<input type="text" name="title" onChange={(e) => { this.handleChange("title", e) }} /><br /><br />
                                        Category: <select name="category" onChange={(e) => { this.handleChange("category", e) }} >

                                            <option >--</option>
                                            {
                                                this.state.categoryList && this.state.categoryList.map((data) => {
                                                    console.log("dataaaaaaaaa from form category map function", data);
                                                    return (
                                                       
                                                        <option value={data._id}>{data.category}</option>

                                                    )

                                                }

                                                )
                                            }
                                        </select> <br />
                                        <br />

                                        Image:<input type="file" name="image" onChange={(e) => { this.handleChange("image", e) }} /><br /><br />
                                        <input type="submit" value="Upload Post" />
                                        <Link to="/home"><input type="submit" value="cancel" /></Link>
                                    </form>
                                </div>



                            </div>
                        </div>

                        <div className="clear" />
                    </div>
                </div>
                <Footer />
            </div>

        );
    }


}
export default PostForm;