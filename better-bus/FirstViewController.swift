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
    
    Alamofire.request(.GET,  "https://calm-everglades-9373.herokuapp.com/vehicle", parameters: ["id": "302"])
      .responseJSON { response in
        switch response.result {
        case .Success:
          if let value = response.result.value {
            let json = JSON(value)
            let time = json["vehicles"]["timestamp"][0].string
            let vehicle = json["vehicles"]["vehicle"][0]
            let lat = vehicle["latitude"][0].string
            let long = vehicle["longitude"][0].string
            let vehicleNum = vehicle["number"][0].string
            print(time, vehicleNum, "latitude : \(lat)", "longitude: \(long)")
//            print("JSON: \(json)")
          }
        case .Failure(let error):
          print(error);
        }
    
//        if let JSON = response.result.value {
//          print("JSON: \(JSON)")
//        }
      }
  }
}