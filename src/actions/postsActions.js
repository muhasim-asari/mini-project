export const GET_ORDERS= 'GET ORDERS'
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS'
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE'

export const getListOrder = () => ({ type: GET_ORDERS })
export const getListOrderSuccess = listOrder => ({
  type: GET_ORDERS_SUCCESS,
  payload: listOrder,
})
export const getListOrderFailure = () => ({ type: GET_ORDERS_FAILURE })

export function fetchListOrder() {
  return async dispatch => {
    dispatch(getListOrder())

    try {
      const response = await fetch('https://private-08786a-mymed.apiary-mock.com/v1/medications')
      const data = await response.json()

      dispatch(getListOrderSuccess(data))
    } catch (error) {
      dispatch(getListOrderFailure())
    }
  }
}
