import React from 'react';
import SinglePostBase from './singlePostBase';
import {Link } from 'react-router-dom';
class SinglePost extends SinglePostBase {
  render() {
    let user = localStorage.getItem("user");
    let userJson = JSON.parse(user);
    return (
      <div>
        <meta charSet="utf-8" />
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="/images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="/images/btn_sep.png" alt="sep" /></span> <Link to='/createPost'>Upload Post</Link> </div>
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="/images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="/images/btn_sep.png" alt="sep" /></span> <Link to='/addcategory'>Add Category</Link> </div>

              <div className="rght_cate">
                <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                <div className="sub_dwn">
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img1.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img2.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Dogs</div>
                    </div>
                  </div>
                  <div className="feat_sec">
                    <div className="feat_sec_img"><img src="/images/feat_img3.png" alt="image" /></div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">Rabbits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_lft">
              <div className="contnt_2">
                <div className="div_a">
                  <div className="div_title">{this.state.title}</div>
                  <div className="btm_rgt">
                    <div className="btm_arc">{this.state.category.category}</div>
                  </div>
                  <div className="div_top">
                    <div className="div_top_lft"><img src="/images/img_6.png" />{this.state.lastname}</div>
                    <div className="div_top_rgt"><span className="span_date">{new Date(this.state.date).toDateString()}</span><span className="span_time">{new Date(this.state.date).toLocaleTimeString('en-US')}</span></div>
                  </div>
                  <div className="div_image"><img src={`http://localhost:7070/static/${this.state.image}`} alt="pet" /></div>
                  <div className="div_btm">
                    <div className="btm_list">
                      <ul>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_001.png" alt="share" /></span>Share</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_002.png" alt="share" /></span>Flag</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_003.png" alt="share" /></span>Likes {this.state.likes.length}</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_004.png" alt="share" /></span>{this.state.comment.length} Comments</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contnt_3">
                <ul>




                  { this.state.comment.map((data) => {

                    return (
                      <li>
                        <div className="list_image">
                          <div className="image_sec"><img src="/images/post_img.png" /></div>
                          <div className="image_name">{data.firstname}</div>
                        </div>
                        <div className="list_info">

                          {data.comment}
                        </div>
                        <input type="button" defaultValue="Reply" className="orng_btn" />
                      </li>
                    )
                  })
                  }
                  <li>
                    <div className="cmnt_div1">
                    <form onSubmit={this.addComment}>
                      <input type="text" name="comment" placeholder="Enter your Comment" className="cmnt_bx1" onChange={(e) => { this.handleChange("commentText", e) }} value={this.state.commentText} />
                      <input type="submit" className="sub_bttn1" defaultValue="Submit Comment"  />
                      </form>
                    </div>
                  </li>
                </ul>
                <div className="view_div"><a href="#">View more</a></div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
export default SinglePost;