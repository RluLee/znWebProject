import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import Swiper from 'react-id-swiper';
import Swiper from './Swiper';
import Home from './Home'
import AboutLine from './AboutLine'
import Service from './Service'
import ServiceAudit from './ServiceAudit'
import MainTitle from './MainTitle'
import Button from './Button'
import BaiduMap from './BaiduMap'
import DcFooter from './DcFooter'

import './style.css'
import './home.css'

const audits = [
    {
        key:'会计服务',
        auditTitle:{cn:'会计服务需求资料',en:'Annual Report Audit'},
        auditContent:{header:'根据会计工作需要，请提供如下资料，多谢合作。',content:[
            '正在更新中...',
        ]},
    },{
        key:'审计服务',
        auditTitle:{cn:'年报审计需求资料',en:'Annual Report Audit'},
        auditContent:{header:'根据审计工作需要，请提供如下资料，多谢合作。',content:[
            '2017年12月31日的（盖章）资产负债表;',
            '2017年度的（盖章）损益表;',
            '2017年度最后一个月的（盖章）增值税纳税申报表;',
            '2017年度最后一个月的（盖章）地方税（费）纳税综合申报表;',
            '2017年度的（盖章）所得税汇算清缴资料;',
            '2017年12月31日各科目明细的期初余额、当期发生额及期末余额明细表;',
            '每一个银行账户分别截至2017年12月31日的对帐单、余额调节表;',
            '股票投资账户截止2017年12月31日的对账单（由证券营业部提供）。委托投资、资金拆借合同，受托资产合同，相应受托资产损益情况统计表;',
            '截至2017年12月31日银行借款明细、借款合同、抵押、担保合同;',
            '2017年12月31日应收应付票据构成明细（出票人、承兑人、收款人、出票日、到期日、是否带息及利率、应付票据对应的承兑保证金金额等）;',
            '2017年12月31日应收款项（包括其他应收款）、预收款项、应付款项（包括其他应付款）、预付款项等往来项目的账龄、款项内容;',
            '2017年12月31日至审计日上述往来项目的款项收回和结算情况;',
            '做好往来款项和银行存、借款的询证函函证工作，函证数字为贵公司账面结余数;',
            '截至2017年12月31日的各项存货（原材料、低耗品、产成品、库存商品等）盘点表;',
            '截至2017年12月31日的各长期股权投资单位的营业执照副本（当期年检过）、会计报表;',
            '如在2017年1月1日之后有新增投资,还须提供管理当局批准资料、被投资单位验资报告;',
            '2012年17月31日固定资产明细清单（资产类别、原值、残值率、折旧年限、累计折旧、启用日期）、有无抵押担保;',
            '构成固定资产及无形资产的房地产权证、车辆行驶证、土地使用权证、土地红线图、专利证书、专利登记簿、商标注册证（复印件）;',
            '贵公司最近的公司章程和验资报告;',
            '贵公司最近年检过的营业执照（副本复印）、税务登记证（副本复印）;',
        ]},
    },{
        key:'税务服务',
        auditTitle:{cn:'年报税务需求资料',en:'Annual Report Audit'},
        auditContent:{header:'根据税务工作需要，请提供如下资料，多谢合作。',content:[
            '正在更新中...',
        ]},
    },{
        key:'评估服务',
        auditTitle:{cn:'年报评估需求资料',en:'Annual Report Audit'},
        auditContent:{header:'根据评估工作需要，请提供如下资料，多谢合作。',content:[
            '正在更新中...',
        ]},
    },{
        key:'其他服务',
        auditTitle:{cn:'年报其他需求资料',en:'Annual Report Audit'},
        auditContent:{header:'根据其他工作需要，请提供如下资料，多谢合作。',content:[
            '正在更新中...',
        ]},
    },
]

class Example extends Component {
    constructor(){
        super()

        this.state={
            serviceAudit:false,
            isScroll:true,
            auditTitle:{cn:'年报审计需求资料',en:'Annual Report Audit'},
            auditContent:{header:'根据审计工作需要，请提供如下资料，多谢合作。',content:[
                '2017年12月31日的（盖章）资产负债表;',
                '2017年度的（盖章）损益表;',
                '2017年度最后一个月的（盖章）增值税纳税申报表;',
                '2017年度最后一个月的（盖章）地方税（费）纳税综合申报表;',
                '2017年度的（盖章）所得税汇算清缴资料;',
                '2017年12月31日各科目明细的期初余额、当期发生额及期末余额明细表;',
                '每一个银行账户分别截至2017年12月31日的对帐单、余额调节表;',
                '股票投资账户截止2017年12月31日的对账单（由证券营业部提供）。委托投资、资金拆借合同，受托资产合同，相应受托资产损益情况统计表;',
                '截至2017年12月31日银行借款明细、借款合同、抵押、担保合同;',
                '2017年12月31日应收应付票据构成明细（出票人、承兑人、收款人、出票日、到期日、是否带息及利率、应付票据对应的承兑保证金金额等）;',
                '2017年12月31日应收款项（包括其他应收款）、预收款项、应付款项（包括其他应付款）、预付款项等往来项目的账龄、款项内容;',
                '2017年12月31日至审计日上述往来项目的款项收回和结算情况;',
                '做好往来款项和银行存、借款的询证函函证工作，函证数字为贵公司账面结余数;',
                '截至2017年12月31日的各项存货（原材料、低耗品、产成品、库存商品等）盘点表;',
                '截至2017年12月31日的各长期股权投资单位的营业执照副本（当期年检过）、会计报表;',
                '如在2017年1月1日之后有新增投资,还须提供管理当局批准资料、被投资单位验资报告;',
                '2012年17月31日固定资产明细清单（资产类别、原值、残值率、折旧年限、累计折旧、启用日期）、有无抵押担保;',
                '构成固定资产及无形资产的房地产权证、车辆行驶证、土地使用权证、土地红线图、专利证书、专利登记簿、商标注册证（复印件）;',
                '贵公司最近的公司章程和验资报告;',
                '贵公司最近年检过的营业执照（副本复印）、税务登记证（副本复印）;',
            ]},
        }
    }

    clickServiceAudit (audit){
        let {auditTitle ,auditContent} = this.state;
        audits.forEach((item)=>{
            if(item.key == audit){
                auditTitle = item.auditTitle;
                auditContent = item.auditContent;
            }
        })
        this.setState({
            auditTitle,
            auditContent,
            serviceAudit:true,
        })
    }
    resetServiceAudit(){
        this.setState({serviceAudit:false,isScroll:true})
    }
    preventScroll(){
        this.setState({isScroll:false})
    }

    approveScroll(){
        this.setState({isScroll:true})
    }

    render() {

        const {serviceAudit ,auditTitle ,auditContent } = this.state;

        const params = {
            container:'page-container',
            pagination: 'page-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            width:'100%',
            paginationClickable: true,
            mousewheelControl: true,
            hashnav:true,
            hashnavWatchState:true,
            contentsList:[
                {key:1,chinese:'首页',english:'Home'},
                {key:2,chinese:'关于我们',english:'About us'},
                {key:3,chinese:'服务范围',english:'Service scope'},
                {key:4,chinese:'加入我们',english:'Join us'},
                {key:5,chinese:'企业资质',english:'Qualifications'},
                {key:6,chinese:'代账平台',english:'Finance software'},
                {key:7,chinese:'联系我们',english:'Contact us'},
            ],
            onSlideChangeEnd:()=>{this.resetServiceAudit()},
            resetServiceAudit:()=>{this.resetServiceAudit()},
            isScroll:this.state.isScroll,
        }
        let list = [
            {title:'使命',text:'致力于企业财务品质的持续改善'},
            {title:'目标',text:'成为中国一流的财务品质专家'},
            {title:'企业精神',text:'培养员工的终身执业能力，与客户共同成长'},
            {title:'核心竞争力',text:'专业的职业素养'},
            {title:'工作理念',text:'遵从职业精神'},
            {title:'客户观念',text:'力求使客户满意'},
            {title:'生存理念',text:'漠视危机等于自杀'},
        ]
        let serviceList = [
            {
                title:'会计服务',
                list:{title:'财务咨询业务',li:['主要提供对企业财务领域的咨询业务']}
            },{
                title:'审计服务',
                list:{
                    title:'主要提供各企业的法定审计业务和专项审计业务。',
                    li:['◆ 法定审计业务','◆ 专项审计业务','◇ 净资产审计','◇ 企业内部审计','◇ 特定项目审计','◇ 司法会计鉴定']
                },
            },{
                title:'税务服务',
                list:
                    {title:'税务外汇业务',li:['主要提供对企业税务报告、税务注销及外汇外资等业务']}
                ,
            },{
                title:'评估服务',
                list:{
                    title:'主要提供各企业的资产价值形态的评估业务',
                    li:['◆ 一般评估业务','◇ 提供对明确评估企业的评定、估算的业务','◆ 评估咨询业务','◇ 以评估手段为企业提供咨询服务的业务','◆ 评估复核业务','◇ 提供满足企业收购、资产交易和资产价值调整等领域的需求的业务']
                },
            },{
                title:'其他服务',
                list:[
                    {title:'工程造价业务',li:['主要提供对企业某项工程建设所花费的全部费用估算的业务']},
                    {title:'软件技术业务',li:['主要提供对企业财务税务方面的软件支持的业务']},
                ],
            }
        ]
        let joinParams = {
            container:'join-container',
            // pagination: 'join-pagination',
            direction: 'horizontal',
            slidesPerView: 2,
            paginationClickable: true,
            mousewheelControl: true,
            autoplay : 5000,
            autoplayDisableOnInteraction:false,
            prevButton:'join-prevButton',
            nextButton:'join-nextButton',
        }
        let qualificationsParams = {
            container:'qualifications-container',
            // pagination: 'join-pagination',
            direction: 'horizontal',
            slidesPerView: 1,
            paginationClickable: true,
            mousewheelControl: true,
            autoplay : 5000,
            autoplayDisableOnInteraction:false,
            prevButton:'qualifications-prevButton',
            nextButton:'qualifications-nextButton',
        }

        return (<Swiper {...params}        >
            <div data-class="bg" data-hash="home">
                <div className="model-page box">
                    <Home></Home>
                    <p className="home-footer">Hangzhou Decheng Accountion Firm Co.Ltd</p>
                </div>
            </div>

            <div data-class="bg bg-about" data-hash="about">
                <div className="model-page">
                    <div className="about-content">
                        <div className="about-content-card box-left">
                            <div className="about-content-card-about">
                                关于我们<br/>About us
                            </div>
                            <div className="about-content-card-core">
                                CORE VALUES<br/>MISSION
                            </div>
                            <AboutLine list={list}></AboutLine>
                        </div>
                        <div className="about-content-text box box-row">
                            <img src="./images/about/icon.png" alt=""/>
                            <div>
                                杭州德诚会计师事务所成立于2004年，经过十二年的努力，已发展成为一家专业从事审计验资、资产评估、工程造价、财务咨询、税务外汇等服务的专业机构。事务所是杭州下城区会计联合协会党支部所在地，是会计师事务所行业中一家具有党务工作和党支部的事务所，从2004年发展至今，我们一直兢兢业业致力于自身与客户共同可持续发展。目前我们的业务除浙江本省的万向集团、中球冠集团、华瑞置业集团、盾安集团等大型集团公司外，还辐射了北京，上海，江苏等周边省份。随着业务的不断扩大，我们不忘努力加强自身的各方面建设。<br/>
                                近年来，公司紧紧围绕行业升级转型的战略方向，致力于企业在激烈的竞争中立于不败之地，不断提高企业的品质，不断对品质的持续改善，使企业得以长期、稳定的发展。企业管理要求员工不断学习、提升和发展。作为一个专业致力于企业品质改善的组织，我们坚持“老老实实做人，认认真真做事”，在超越自我和挑战自我中不断进步、长足发展。目前事务所旗下拥有审计、验资、资产评估、工程造价、财务咨询、税务外汇、软件技术等七大块业务，并分别以事业部模式运营。

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-class="bg-service" data-hash="service">
                <div className="model-page box service-content">
                    {
                        serviceAudit?<MainTitle title={auditTitle.cn} english={auditTitle.en} />
                            :<MainTitle title="服务范围" english="Service scope" />
                    }
                    {
                        serviceAudit?<ServiceAudit approveScroll={()=>{this.approveScroll()}} preventScroll={()=>{this.preventScroll()}} {...auditContent} />
                            :<Service onclickServiceAudit={(a)=>{this.clickServiceAudit(a)}} params={serviceList} />
                    }


                </div>
            </div>
            <div data-class="bg-join" data-hash="join">
                <div className="model-page box">
                    <MainTitle title="助你开创未来" english="Help you create the future" text={['如果你怀揣着做审计的梦想','请将您的简历发送至dccpa2017@sina.com']} />

                    <div className="join-button"><div><Button url="http://jobs.51job.com/all/co4105243.html?#syzw" text="更多职位" /></div></div>

                    <Swiper {...joinParams}>
                        <div>
                            <img src="./images/join/join-1.png" alt=""/>
                        </div>
                        <div>
                            <img src="./images/join/join-3.png" alt=""/>
                        </div>
                        <div>
                            <img src="./images/join/join-1.png" alt=""/>
                        </div>
                    </Swiper>

                    <div className="join-footer">报名方式：有意者请将个人简历发至电子邮箱（勿访），简历中请附照片。初审合格后通知面试，未经录用者应聘材料恕不退还，我所负责保密</div>
                </div>
            </div>
            <div data-class="bg-qualifications" data-hash="qualifications">
                <div className="model-page box">
                    <MainTitle title="企业资质" english="Enterprise qualifications" />

                    <Swiper {...qualificationsParams}>
                        <div>
                            <img src="./images/qualification/dc.png" alt=""/>
                        </div>
                        <div>
                            <img src="./images/qualification/dczy.png" alt=""/>
                        </div>
                        <div>
                            <img src="./images/qualification/zr.png" alt=""/>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div data-class="bg-softWare" data-hash="software">

                <MainTitle title="知能财务核算平台" english="Zhineng Caiwu Hesuan Pingtai" text={['依托会计事务所，有着专业的团队和多年丰富的从业经验，是为客户提供全方位财税服务的专业服务平台。公司秉承“知者创物，能者为师”的理念，为企业提供专业化信息化财税解决方案，已先后为多家客户成功提供了优质、高效的服务']} />
            </div>
            <div data-class="bg bg-contact" data-hash="contact">
                <div className="model-page box box-bottom">
                    <MainTitle title="联系我们" english="Contact Us" />
                    <div className="contact-icons">
                        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=306692832&site=qq&menu=yes"><img src="./images/CONTACT/qq.png" alt=""/></a>
                        <a href="mailto:dc-cpa@163.com"><img src="./images/CONTACT/email.png" alt=""/></a>
                    </div>

                    <BaiduMap id="map" />
                    <DcFooter />
                </div>
            </div>
        </Swiper>)
    }
}

ReactDOM.render(<Example/>,
    document.querySelector('#home')
)