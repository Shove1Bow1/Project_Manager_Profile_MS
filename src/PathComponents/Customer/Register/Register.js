//Module and component
import axios from 'axios';
import React, { Component, useState } from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import "./Register.css"

export default function Register() {
    const Navigate=useNavigate();
    const [getCookies,setCookies]=useCookies();
    const [getEmail,setEmail]=useState("");
    const [getFullName,setFullName]=useState("");
    const [getPassword,setPassword]=useState("");
    const [getConfirmPassword,setConfirmPassword]=useState("");
    const [getDate,setDate]=useState("0");
    const [getMonth,setMonth]=useState("0");
    const [getYear,setYear]=useState("0");
    const [getGender,setGender]=useState("-1");
    const [getTelephone,setTelephone]=useState();
    const runScript = () => {
        if(getConfirmPassword.length<5||getPassword<5){
            window.alert("Mật khẩu ngắn");
            return;
        }
        if (!getConfirmPassword.includes(getPassword)||getConfirmPassword!==getPassword) {
            window.alert("Mật khẩu xác nhận sai");
            return;
        } 
        if(getGender.includes("-1")){
            window.alert("Vui lòng chọn giới tính");
            return;
        }
        if(!getEmail){
            window.alert("Vui lòng điền email");
            return;
        }
        if(!getFullName){
            window.alert("Vui lòng điền họ tên");
            return;
        }
        if(getDate.length<2){ 
            window.alert("Vui lòng chọn ngày");
            return;
        }
        if(getMonth.length<2){
            window.alert("Vui lòng chọn Tháng");
            return;
        }
        if(getYear.length<2){
            window.alert("Vui lòng chọn Năm");
            return;
        }
        axios.post(
                "https://gxyvy04g01backend-production.up.railway.app/Customer/Register",
                {
                    CUSTOMER_EMAIL: getEmail,
                    CUS_PASSWORD: getPassword,
                    CUSTOMER_NAME: getFullName,
                    CUSTOMER_TELEPHONE: getTelephone,
                    BIRTHDAY: getYear + "-" + getMonth + "-" + getDate,
                    GENDER: getGender,
                }
            ).then(res => {  
                console.log(res.data)
                if (res.data.STATUS) {
                  
                   setCookies("Customer",res.data.PACKAGE,{path:"/",maxAge:res.data.EXPIRED_TIME})
                   Navigate("/");
                }
                else {
                    window.alert(res.data.ERROR);
                }
            });
    }
    return (
        <div className="container">
            <div className="row-form">
                <h1 className="text-center">Đăng ký tài khoản</h1>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <div className="form-group">
                            <label>Email:</label>
                            <input placeholder="VD:email@example.com" name="emailId" type="email" className="form-control"
                                value={getEmail} onChange={(e)=>{setEmail(e.target.value)}} required></input>
                        </div>
                        <div className="form-group">
                            <label>Họ và tên:</label>
                            <input placeholder="Họ và tên của bạn" name="fullName" className="form-control"
                                value={getFullName} onChange={(e)=>{setFullName(e.target.value)}} required></input>
                        </div>
                        <div className="form-group">
                            <label>Mật Khẩu:</label>
                            <input placeholder="Mật khẩu của bạn" name="Password" type="password" className="form-control"
                                value={getPassword} onChange={(e)=>{setPassword(e.target.value)}} required></input>
                        </div>
                        <div className="form-group">
                            <label>Xác nhận mật khẩu:</label>
                            <input placeholder="Xác nhận mật khẩu của bạn" type="password" name="password" className="form-control"
                                value={getConfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} required></input>
                            {getConfirmPassword === getPassword ? null : <p>wrong password</p>}
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại:</label>
                            <MuiPhoneNumber defaultCountry={'vn'} onlyCountries={['vn']} />
                        </div>
                        <div class="row-select">
                            <div class="col-sm-3">
                                <div style={{ fontWeight: "bolder", padding: "2px" }} >Ngày Sinh</div>
                                <select name="Day" value={getDate} onChange={(e)=>setDate(e.target.value)} required>
                                    <option value="0" selected disabled>Chọn ngày</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>

                                </select>
                            </div>
                            <div class="col-sm-3">
                                <div style={{ fontWeight: "bolder", padding: "2px" }}>Tháng Sinh</div>
                                <select name="Month" value={getMonth} onChange={(e)=>setMonth(e.target.value)} required>
                                    <option value="0" selected disabled>Chọn Tháng</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>

                                </select>
                            </div>
                            <div class="col-sm-3">
                                <div style={{ fontWeight: "bolder", padding: "2px" }} >Năm Sinh</div>
                                <select name="Year" value={getYear} onChange={(e)=>{setYear(e.target.value)}} required>
                                    <option value="0" selected disabled>Chọn Năm</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                    <option value="1922">1922</option>
                                    <option value="1921">1921</option>
                                    <option value="1920">1920</option>
                                    <option value="1919">1919</option>
                                    <option value="1918">1918</option>
                                    <option value="1917">1917</option>
                                    <option value="1916">1916</option>
                                    <option value="1915">1915</option>
                                    <option value="1914">1914</option>
                                    <option value="1913">1913</option>
                                    <option value="1912">1912</option>
                                    <option value="1911">1911</option>
                                    <option value="1910">1910</option>
                                    <option value="1909">1909</option>
                                    <option value="1908">1908</option>
                                    <option value="1907">1907</option>
                                    <option value="1906">1906</option>
                                    <option value="1905">1905</option>
                                    <option value="1904">1904</option>
                                    <option value="1903">1903</option>
                                    <option value="1902">1902</option>
                                    <option value="1901">1901</option>
                                    <option value="1900">1900</option>
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <div style={{ fontWeight: "bolder", padding: "2px" }}>Giới Tính</div>
                                <select name="Gender" value={getGender} onChange={(e)=>setGender(e.target.value)} required>
                                    <option value="-1" disabled selected>Chọn Giới tính</option>
                                    <option value="0">Nam</option>
                                    <option value="1">Nữ</option>
                                </select>
                            </div>
                        </div>
                        <br></br>
                        <button className="btn btn-success" onClick={runScript}>Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
