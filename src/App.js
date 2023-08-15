import ClientDetail from "./ClientDetail";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetail from "./MainDetail";
import Notes from "./Notes";
import Table from "./Table";
import { useState } from "react";
import TableForm from "./TableForm";



function App() {
  const [showInvoice, setShowInvoice]= useState(false)
  const [name,setName]=useState("Anand Kumar")
  const [address,setAddress]=useState("MIG-282, Near Shivaji Park, Kankarbagh Patna - 800020")
  const [email,setEmail]=useState("Msz8002922300@gmail.com")
  const [phone,setPhone]=useState("+91 93346 12288")
  const [bankName,setBankName]=useState("")
  const [bankAccount,setBankAcoountNumber]=useState("+919504194727")
  const [website,setWebsite]=useState("  ")
  const [clientName,setClientName]=useState("shubham raj")
  const [clientAddress,setClientAddress]=useState("Nalanda bihar")
  const [invoiceNumber,setInvoiceNumber]=useState("10")
  const [invoiceDate,setInvoiceDate]=useState("8-9-2023")
  const [dueDate,setDueDate]=useState("8-10-2023")
  const [notes,setNotes]=useState("Kindly Pay on mention account number")
  const [description,setDescription]=useState("")
  const [quantity,setQuantity]=useState("")
  const [price,setPrice]=useState("")
  const [amount,setAmount]=useState("")
  const [list,setList]=useState([])
  const [total,setTotal]=useState(0)
  const handlePrint=()=>{
    window.print()
  }
 
 
  
  return (
    
    <>
    
    <div className="App">
      <main className="m-5 p-5 md:max-w-xl md:mx-auto  lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {/* header */}
      {showInvoice ?(
      <>
      <div>
        <Header handlePrint={handlePrint}/>
        <MainDetail name={name} address={address}/>
        <ClientDetail clientAddress={clientAddress} clientName={clientName}/>
        <Dates dueDate={dueDate} invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} />
        <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal}/>
        <Notes notes={notes}/>
        <Footer name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName} />
        
        </div>
        <button onClick={()=>setShowInvoice(false)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duration-300 ">Edit Information</button>
        </>): (
          <>
          <div className="flex flex-col justify-center ">
          <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" name="text" id="text" placeholder="Enter Your Name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="address">Enter Your Address</label>
          <input type="text" name="text" id="text" placeholder="Enter Your Address" autoComplete="off" value={address} onChange={(e)=>setAddress(e.target.value)}/>
          </div>
          </article>
          <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
          <label htmlFor="email">Enter Your Email</label>
          <input type="email" name="email" id="email" placeholder="Enter Your Email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="website">Enter Your Website</label>
          <input type="url" name="website" id="website" placeholder="Enter Your website" autoComplete="off" value={website} onChange={(e)=>setWebsite(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="phone">Enter Your phone</label>
          <input type="url" name="phone" id="phone" placeholder="Enter Your number" autoComplete="off" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          </article>
          <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="bankName">Enter Your bankName</label>
          <input type="url" name="bankName" id="bankName" placeholder="Enter Your bankName" autoComplete="off" value={bankName} onChange={(e)=>setBankName(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="bankAccount">Enter Your Bank Account</label>
          <input type="url" name="bankAccount" id="bankAccount" placeholder="Enter Your Bank Acount Number" autoComplete="off" value={bankAccount} onChange={(e)=>setBankAcoountNumber(e.target.value)}/>
          </div>
          </article>
          <article className="md:grid grid-cols-2 gap-10 md:mt-16">
          <div className="flex flex-col">
          <label htmlFor="clientName">Enter Your Client Name</label>
          <input type="text" name="clientName" id="clientName" placeholder="Enter Your Client Name" autoComplete="off" value={clientName} onChange={(e)=>setClientName(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="clientAddress">Enter Your Client Address</label>
          <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter Your Client Address" autoComplete="off" value={clientAddress} onChange={(e)=>setClientAddress(e.target.value)}/>
          </div>
          </article>
          <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
          <label htmlFor="invoiceNumber">Enter Invoice number</label>
          <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Enter  Invoice Number" autoComplete="off" value={invoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="invoiceDate">Enter Invoice Date</label>
          <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Enter  Invoice Date" autoComplete="off" value={invoiceDate} onChange={(e)=>setInvoiceDate(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="dueDate">Enter Due Date</label>
          <input type="date" name="dueDate" id="dueDate" placeholder="Enter Due Date" autoComplete="off" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
          </div>
          </article>
          {/* Table form*/}
          <article>
            <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList}  total={total} setTotal={setTotal}/>
          </article>

          <label htmlFor="note">Additional Notes</label>
          <textarea name="textarea" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e)=>setNotes(e.target.value)}></textarea>
          <button onClick={()=>setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
          </div>
          </>
         )}
       
            
            
            
            

            
            
          
      </main>
    </div>
    </>
  );
}

export default App;
