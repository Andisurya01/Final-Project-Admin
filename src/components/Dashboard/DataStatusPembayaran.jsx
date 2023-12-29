/* eslint-disable react/prop-types */
import { putOrderApprove } from "../../api/coursesAPI"
import ButtonAksi from "../Button/ButtonAksi"
import { consumeCourseTrackingsApi } from "../../api/courseTrackings"
import { consumeOrderApi } from "../../api/order"

const DataStatusPembayaran = ({ ID , UserId , IsCourseId ,  Kategori, KelasPremium, Status, MetodePembayaran, TanggalBayar, CourseId }) => {
    const handleApproveCourse = async () => {

        const res = await consumeOrderApi.getOrder();
        const orderFilterById = await res.data.filter( data => {
            return data.id == CourseId;
        })
        
        if(orderFilterById[0].status != 'APPROVED'){
            putOrderApprove(CourseId).then(res => {
                if(res.status == 200){
                    createCourseTracking({status : 'PROGRESS' , userId : UserId , courseId : IsCourseId })
                }
            })
        }else{
            return false;
        }
    }

    const createCourseTracking = (payload) => {
        const { status , userId , courseId } = payload;
        consumeCourseTrackingsApi.createCourseTrackingsUser({
            status : status,
            userId : userId,
            courseId : courseId
        }).then(res => {
            if(res.status != 'OK'){
                return false;

            }
        })
    }

    // const createNotification = (course) => {
    //     const payload = {
    //         title : 'Kelas Order',
    //         subtitle : `Kelas ${course} sudah berjalan`,
    //         description :`Ikuti kelas hingga selesai dan mendapatkan value yang diharapkan`
    //     }

    //     consumeNotificationApi.postNotification(payload).then(res => {
    //         if(res.status != 'OK'){
    //             return false;
    //         }
    //     })
    // }

    return (
        <section className="px-16">
            <div className="grid grid-cols-8 px-5 py-3 gap-3 items-center">
                <div className="text-[10px] font-bold text-[#4E5566]"><p>{ID}</p></div>
                <div className="text-[10px] font-bold text-[#4E5566]"><p>{Kategori}</p></div>
                <div className="text-[10px] font-bold col-span-2"><p>{KelasPremium}</p></div>
                <div className={Status === "APPROVED" ? "text-xs font-bold text-SUCCESS" : "text-xs font-bold text-WARNING"}><p>{Status}</p></div>
                <div className="text-[10px] font-bold "><p>{MetodePembayaran}</p></div>
                <div className="text-[10px] font-bold "><p>{TanggalBayar}</p></div>
                <div className="flex gap-[5px]">
                    <button onClick={()=>handleApproveCourse(CourseId)}>
                        <ButtonAksi title="Approved" background="#6148FF" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DataStatusPembayaran