/*
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2023-08-09 18:11:43
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2023-08-10 18:19:05
 */
export interface Pagination {
  currentPage: number,
  pageSize?:number,
  pageSizes?: number[],
  disabled?:boolean,
  background?:boolean,
  layout?:string,
  total:number
}