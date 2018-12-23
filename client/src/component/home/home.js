import React from 'react';
import HomeBase from './homeBase';
import { Link } from "react-router-dom";
import Header from '../../subcomponent/header/header';
import Footer from '../../subcomponent/footer';

class Home extends HomeBase {


  render() {
    let user = localStorage.getItem("user");
    let UserJson = JSON.parse(user);
    return (
      <div>
        <Header getPostsParent={this.getPosts} />
        <meta charSet="utf-8" />
        <title>Home</title>
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <Link to='/createPost'>Upload Post</Link> </div>
              <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <Link to="/addCategory">Add Category</Link> </div>
              <div className="rght_cate">
                <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
                {this.state.categoryList && this.state.categoryList.map((data) => {

                  return (


                    <div className="rght_list">
                      <ul>
                        <li onClick={() => { this.getPosts({ category: data._id }, {}) }}><span className="list_icon" ><img src={`http://localhost:7070/static/${data.image}`} alt="up" /></span> {data.category}</li>
                        {/* <li><a href="#"><span className="list_icon"><img src="images/icon_02.png" alt="up" /></span> Dogs</a></li> */}
                        {/* <li><a href="#"><span className="list_icon"><img src="images/icon_03.png" alt="up" /></span> Birds</a></li> */}
                        {/* <li><a href="#"><span className="list_icon"><img src="images/icon_04.png" alt="up" /></span> Rabbit</a></li> */}
                        {/* <li><a href="#"><span className="list_icon"><img src="images/icon_05.png" alt="up" /></span> Others</a></li> */}
                      </ul>
                    </div>

                  );
                }
                )
                }
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
                <div className="list_1">
                  <ul>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Friends</li>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Flaged</li>
                  </ul>
                </div>
                <div className="post_div">
                  <div className="post_list">
                    <ul>
                      <div onClick={() => { this.getPosts({}, { date: -1 }, 0) }}>  <li><span className="list_img" ><img src="images/img_1.png" /></span>Latest First</li></div>
                      <div onClick={() => { this.getPosts({}, { date: 1 }, 0) }}>  <li><span className="list_img" ><img src="images/img_2.png" /></span>Oldest First</li></div>
                      <div onClick={() => { this.getPosts({}, { likes: -1 }, 0) }}><li><span className="list_img"><img src="images/img_3.png" /></span>Most Liked</li></div>
                      <div onClick={() => { this.getPosts({}, { commentCount: -1 }, 0) }}> <li><span className="list_img" ><img src="images/img_5.png" /></span>Most Commented</li></div>                      </ul>
                  </div>
                  <div className="post_txt">{this.state.postList.length}  Post Updates</div>
                </div>
              </div>
              {

                this.state.postList && this.state.postList.map((post) => {
                  return (
                    <div className="contnt_2">
                      <div className="div_a">
                        <div className="div_title">{post.title}</div>
                        <div className="btm_rgt">
                          <div className="btm_arc">{post.category.category}</div>
                        </div>
                        <div className="div_top">
                          <div className="div_top_lft"><img src="images/img_6.png" />{post.firstname} {post.lastname}</div>
                          <div className="div_top_rgt"><span className="span_date">{new Date(post.date).toDateString()}</span><span className="span_time">{post.time}</span></div>
                        </div>
                        <div className="div_image"><img src={`http://localhost:7070/static/${post.image}`} alt="pet" /></div>
                        <div className="div_btm">
                          <div className="btm_list">
                            <ul>
                              <li><a href="#"><span className="btn_icon"><img src="images/icon_001.png" alt="share" /></span>Share</a></li>
                              <li><a href="#"><span className="btn_icon"><img src="images/icon_002.png" alt="share" /></span>Flag</a></li>
                              <li><Link to={`/singlePost/${post._id}`}><span className="btn_icon"><img src="images/icon_004.png" alt="share" /></span>{post.comment.length} Comments</Link></li>
                              <li><span className="btn_icon"><img src="images/icon_003.png" alt="share" onClick={() => { if (post.likes.indexOf(UserJson._id) == -1) { this.addLike(post._id) } }} /></span >Likes</li>
                              <div className="like_count" style={{ marginRight: 10 }}><span className="lft_cnt" /><span className="mid_cnt">{post.likesCount}</span><span className="rit_cnt" /></div>
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                }
                )

              }
              <br />
              <br />
              {/* {(this.state.data.options.skip<this.state.count-this.state.data.options.limit) &&
                <input type="submit" name="next" value="next" onClick={()=>{this.paging("next")}}/>}
                { (this.state.data.options.skip>0) &&
                <input type="submit" name="previous" value="previous" onClick={()=>{this.paging("previous")}}/>
                } */}
            </div>


          </div>
          <div className="clear" />
        </div>
        <Footer />

      </div>

    );
  }
}
export default Home;
