import React from 'react';
import { HomeOutlined, PhoneOutlined, LinkOutlined, FacebookOutlined,InstagramOutlined } from '@ant-design/icons';


export default function Footer() {
  return (
      <section className='section' id='footer'>
          <div id='footer'><div className='footer_main'>
              <div className='adress'>
                  <p><HomeOutlined />Trung Tâm Đào Tạo Lập Trình CyberSoft-
                      112 Đ. Cao Thắng</p>
                  <p><PhoneOutlined />0937896347</p>
                  <p><a href='https://cybersoft.edu.vn/danh-sach-khoa-hoc/'><LinkOutlined />cybersoft</a></p>
              </div>
              <div className='contact'>
                  <p><a href='https://www.facebook.com/phat.nhat.142035/'><FacebookOutlined />Facebook</a></p>
                  <p><a href='https://www.facebook.com/phat.nhat.142035/'><InstagramOutlined />Instagram</a></p>

              </div>
          </div>
              <div className='footer_extra'>
                  <p>© 2020. All Rights Reserved.</p>
              </div></div>
      </section>
  )
}
