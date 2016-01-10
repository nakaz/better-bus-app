//
//  FirstViewController.swift
//  better-bus
//
//  Created by Sean Nakamura on 12/30/15.
//  Copyright (c) 2015 Sean Nakamura. All rights reserved.
//

import UIKit
import Alamofire
import SwiftyJSON

class FirstViewController: UIViewController {
  
  @IBOutlet weak var inputstuff: UITextField!
  
  @IBOutlet weak var text: UILabel!
  
  @IBAction func enter(sender: AnyObject) {
    let busId = Int(inputstuff.text!)
    print(busId)
    
    Alamofire.request(.GET,  "https://calm-everglades-9373.herokuapp.com/vehicle", parameters: ["id": busId!])
      .responseJSON { response in
        switch response.result {
        case .Success:
          if let value = response.result.value {
            let json = JSON(value)
            let time:String! = json["vehicles"]["timestamp"][0].string
            let vehicle = json["vehicles"]["vehicle"][0]
            let lat:String! = vehicle["latitude"][0].string
            let long:String! = vehicle["longitude"][0].string
            let vehicleNum:String! = vehicle["number"][0].string
            print(time, vehicleNum, "latitude : \(lat)", "longitude: \(long)")
            let newValue = "located at \(lat) and \(long)"
            print(newValue)
            self.text.text = newValue
          }
        case .Failure(let error):
          print(error);
        }
    }
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    func helloWorld(name: String) -> String {
      let greeting = "Hello, " + name + "!"
      return greeting
    }
    
    print(helloWorld("Sean"))
    print(helloWorld("Tony"))
    print(helloWorld("Jesse"))
    print(helloWorld("Vic"))
    

  }
}